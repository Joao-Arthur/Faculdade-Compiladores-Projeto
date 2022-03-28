import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify empty program', () => {
        expect(lexicalAnalysis('')).toEqual([]);
    });

    it('should correctly identify begin and end', () => {
        expect(
            lexicalAnalysis(`program;
end.`)
        ).toEqual([
            { line: 1, word: 'program', id: symbols.program },
            { line: 1, word: ';', id: symbols[';'] },
            { line: 2, word: 'end', id: symbols.end },
            { line: 2, word: '.', id: symbols['.'] }
        ]);

        expect(
            lexicalAnalysis(`
program;
end.
`)
        ).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'end', id: symbols.end },
            { line: 3, word: '.', id: symbols['.'] }
        ]);
    });

    it('should separate numbers and letters', () => {
        expect(lexicalAnalysis('My1stV4r := 764VY;')).toEqual([
            { line: 1, word: 'my1stv4r', id: symbols.identificador },
            { line: 1, word: ':=', id: symbols[':='] },
            { line: 1, word: '764', id: symbols.inteiro },
            { line: 1, word: 'vy', id: symbols.identificador },
            { line: 1, word: ';', id: symbols[';'] }
        ]);
    });

    it('should identify simple program', () => {
        const source = `
program test123;
    var x, y, z: integer;
    begin readln(x);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'test123', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 3, word: 'x', id: symbols.identificador },
            { line: 3, word: ',', id: symbols[','] },
            { line: 3, word: 'y', id: symbols.identificador },
            { line: 3, word: ',', id: symbols[','] },
            { line: 3, word: 'z', id: symbols.identificador },
            { line: 3, word: ':', id: symbols[':'] },
            { line: 3, word: 'integer', id: symbols.integer },
            { line: 3, word: ';', id: symbols[';'] },
            { line: 4, word: 'begin', id: symbols.begin },
            { line: 4, word: 'readln', id: symbols.readln },
            { line: 4, word: '(', id: symbols['('] },
            { line: 4, word: 'x', id: symbols.identificador },
            { line: 4, word: ')', id: symbols[')'] },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'end', id: symbols.end },
            { line: 5, word: '.', id: symbols['.'] }
        ]);
    });

    it('should ignore case', () => {
        const source = `
PROGRAM TESTCASE;
    VAR X: INTEGER;
BEGIN
    READLN(X);
END;
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'testcase', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 3, word: 'x', id: symbols.identificador },
            { line: 3, word: ':', id: symbols[':'] },
            { line: 3, word: 'integer', id: symbols.integer },
            { line: 3, word: ';', id: symbols[';'] },
            { line: 4, word: 'begin', id: symbols.begin },
            { line: 5, word: 'readln', id: symbols.readln },
            { line: 5, word: '(', id: symbols['('] },
            { line: 5, word: 'x', id: symbols.identificador },
            { line: 5, word: ')', id: symbols[')'] },
            { line: 5, word: ';', id: symbols[';'] },
            { line: 6, word: 'end', id: symbols.end },
            { line: 6, word: ';', id: symbols[';'] }
        ]);
    });

    it('line breaks should be separators', () => {
        const source = `
linebreak
linebreak
1
2
3
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'linebreak', id: symbols.identificador },
            { line: 3, word: 'linebreak', id: symbols.identificador },
            { line: 4, word: '1', id: symbols.inteiro },
            { line: 5, word: '2', id: symbols.inteiro },
            { line: 6, word: '3', id: symbols.inteiro }
        ]);
    });
});
