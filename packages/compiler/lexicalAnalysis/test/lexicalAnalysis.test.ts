import { symbolsId } from '../../symbols';
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
            { line: 1, word: 'program', id: symbolsId.program },
            { line: 1, word: ';', id: symbolsId[';'] },
            { line: 2, word: 'end', id: symbolsId.end },
            { line: 2, word: '.', id: symbolsId['.'] }
        ]);

        expect(
            lexicalAnalysis(`
program;
end.
`)
        ).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'end', id: symbolsId.end },
            { line: 3, word: '.', id: symbolsId['.'] }
        ]);
    });

    it('should separate numbers and letters', () => {
        expect(lexicalAnalysis('My1stV4r := 764VY;')).toEqual([
            { line: 1, word: 'my1stv4r', id: symbolsId.identificador },
            { line: 1, word: ':=', id: symbolsId[':='] },
            { line: 1, word: '764', id: symbolsId.inteiro },
            { line: 1, word: 'vy', id: symbolsId.identificador },
            { line: 1, word: ';', id: symbolsId[';'] }
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
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'test123', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 3, word: 'x', id: symbolsId.identificador },
            { line: 3, word: ',', id: symbolsId[','] },
            { line: 3, word: 'y', id: symbolsId.identificador },
            { line: 3, word: ',', id: symbolsId[','] },
            { line: 3, word: 'z', id: symbolsId.identificador },
            { line: 3, word: ':', id: symbolsId[':'] },
            { line: 3, word: 'integer', id: symbolsId.integer },
            { line: 3, word: ';', id: symbolsId[';'] },
            { line: 4, word: 'begin', id: symbolsId.begin },
            { line: 4, word: 'readln', id: symbolsId.readln },
            { line: 4, word: '(', id: symbolsId['('] },
            { line: 4, word: 'x', id: symbolsId.identificador },
            { line: 4, word: ')', id: symbolsId[')'] },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'end', id: symbolsId.end },
            { line: 5, word: '.', id: symbolsId['.'] }
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
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'testcase', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 3, word: 'x', id: symbolsId.identificador },
            { line: 3, word: ':', id: symbolsId[':'] },
            { line: 3, word: 'integer', id: symbolsId.integer },
            { line: 3, word: ';', id: symbolsId[';'] },
            { line: 4, word: 'begin', id: symbolsId.begin },
            { line: 5, word: 'readln', id: symbolsId.readln },
            { line: 5, word: '(', id: symbolsId['('] },
            { line: 5, word: 'x', id: symbolsId.identificador },
            { line: 5, word: ')', id: symbolsId[')'] },
            { line: 5, word: ';', id: symbolsId[';'] },
            { line: 6, word: 'end', id: symbolsId.end },
            { line: 6, word: ';', id: symbolsId[';'] }
        ]);
    });
});
