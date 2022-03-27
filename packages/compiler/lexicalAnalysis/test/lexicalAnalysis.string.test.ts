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
                word: 'there"s no string variables in this language',
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
                word: 'this is ground control to major tom',
                id: symbols.literal
            }
        ]);
    });

    it('should throw on unfinished string', () => {
        const source = `'so far, so good, so what?`;
        expect(() => lexicalAnalysis(source)).toThrow('string não encerrada');
    });
});
