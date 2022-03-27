import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify strings', () => {
        const source = `
WriteLn('There"s NO String variables IN THIS language');
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'writeln', id: symbolsId.writeln },
            { line: 2, word: '(', id: symbolsId['('] },
            {
                line: 2,
                word: 'there"s no string variables in this language',
                id: symbolsId.literal
            },
            { line: 2, word: ')', id: symbolsId[')'] },
            { line: 2, word: ';', id: symbolsId[';'] }
        ]);
    });

    it('should identify if ends on string', () => {
        const source = `'THIS IS GROUND CONTROL TO MAJOR TOM'`;
        expect(lexicalAnalysis(source)).toEqual([
            {
                line: 1,
                word: 'this is ground control to major tom',
                id: symbolsId.literal
            }
        ]);
    });

    it('should throw on unfinished string', () => {
        const source = `'so far, so good, so what?`;
        expect(() => lexicalAnalysis(source)).toThrow('string não encerrada');
    });
});
