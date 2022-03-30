import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should consider line breaks separators for numbers', () => {
        const source = `1
2
3`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: '1', id: symbols.inteiro },
            { line: 2, word: '2', id: symbols.inteiro },
            { line: 3, word: '3', id: symbols.inteiro }
        ]);
    });

    it('should consider line breaks separators for identifiers', () => {
        const source = `lorem
ipsum`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: 'lorem', id: symbols.identificador },
            { line: 2, word: 'ipsum', id: symbols.identificador }
        ]);
    });

    it('should consider line breaks separators for reserved words', () => {
        const source = `if
else`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: 'if', id: symbols.if },
            { line: 2, word: 'else', id: symbols.else }
        ]);
    });

    it('should consider line breaks separators for strings', () => {
        const source = `'hello'','
'world'
'!'`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: 'hello', id: symbols.literal },
            { line: 1, word: ',', id: symbols.literal },
            { line: 2, word: 'world', id: symbols.literal },
            { line: 3, word: '!', id: symbols.literal }
        ]);
    });

    it('should consider line breaks separators for symbols', () => {
        const source = `:
=
...
.`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: ':', id: symbols[':'] },
            { line: 2, word: '=', id: symbols['='] },
            { line: 3, word: '..', id: symbols['..'] },
            { line: 3, word: '.', id: symbols['.'] },
            { line: 4, word: '.', id: symbols['.'] }
        ]);
    });

    it('should consider line breaks separators for all words', () => {
        const source = `hello
:=
76
;`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 1, word: 'hello', id: symbols.identificador },
            { line: 2, word: ':=', id: symbols[':='] },
            { line: 3, word: '76', id: symbols.inteiro },
            { line: 4, word: ';', id: symbols[';'] }
        ]);
    });
});
