import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify strings', () => {
        const source = `
WriteLn('There"s NO String variables IN THIS language');
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'writeln', id: symbols.writeln },
            { line: 2, word: '(', id: symbols['('] },
            {
                line: 2,
                word: 'There"s NO String variables IN THIS language',
                id: symbols.literal
            },
            { line: 2, word: ')', id: symbols[')'] },
            { line: 2, word: ';', id: symbols[';'] }
        ]);
    });

    it('should identify if ends on string', () => {
        const source = `'THIS IS GROUND CONTROL TO MAJOR TOM'`;
        expect(lexicalAnalysis(source)).toEqual([
            {
                line: 1,
                word: 'THIS IS GROUND CONTROL TO MAJOR TOM',
                id: symbols.literal
            }
        ]);
    });

    it('should throw on unfinished string', () => {
        const source = `'so far, so good, so what?`;
        expect(() => lexicalAnalysis(source)).toThrow('string não encerrada');
    });

    it('should throw on multiline string', () => {
        const source = `'Lorem ipsum dolor sit amet,
consectetur adipiscing elit.'`;
        expect(() => lexicalAnalysis(source)).toThrow('string não encerrada');
    });

    it('should throw on strings larger than 256 character', () => {
        expect(
            lexicalAnalysis(`
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris sed diam feugiat malesuada. Vestibulum maximus elementum odio, ac tempor elit egestas at. Nulla ut lorem cursus, convallis sapien non, pharetra mi. Pellentesque habitant morbi tristi'
            `)
        ).toEqual([
            {
                line: 2,
                word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris sed diam feugiat malesuada. Vestibulum maximus elementum odio, ac tempor elit egestas at. Nulla ut lorem cursus, convallis sapien non, pharetra mi. Pellentesque habitant morbi tristi',
                id: symbols.literal
            }
        ]);

        expect(
            lexicalAnalysis(`
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris sed diam feugiat malesuada. Vestibulum maximus elementum odio, ac tempor elit egestas at. Nulla ut lorem cursus, convallis sapien non, pharetra mi. Pellentesque habitant morbi tristiq'
            `)
        ).toEqual([
            {
                line: 2,
                word: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris sed diam feugiat malesuada. Vestibulum maximus elementum odio, ac tempor elit egestas at. Nulla ut lorem cursus, convallis sapien non, pharetra mi. Pellentesque habitant morbi tristiq',
                id: symbols.literal
            }
        ]);

        expect(() =>
            lexicalAnalysis(`
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris sed diam feugiat malesuada. Vestibulum maximus elementum odio, ac tempor elit egestas at. Nulla ut lorem cursus, convallis sapien non, pharetra mi. Pellentesque habitant morbi tristiqu'
            `)
        ).toThrow('o tamanho máximo para uma string é 256 caracteres!');
    });
});
