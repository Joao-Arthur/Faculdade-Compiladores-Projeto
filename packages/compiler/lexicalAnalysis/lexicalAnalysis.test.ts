import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify empty program', () => {
        expect(lexicalAnalysis('')).toEqual([]);
    });

    it('should correctly identify begin and end', () => {
        expect(
            lexicalAnalysis(`program;
end.`)
        ).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);

        expect(
            lexicalAnalysis(`
program;
end.
`)
        ).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });

    it('should separate numbers and letters', () => {
        expect(lexicalAnalysis('My1stV4r := 764VY;')).toEqual([
            { word: 'my1stv4r', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '764', id: symbolsId.inteiro },
            { word: 'vy', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] }
        ]);
    });

    it('should identify simple program', () => {
        const source = `
program test123;
    var x, y, z: integer;
begin
    readln(x);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'test123', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'x', id: symbolsId.identificador },
            { word: ',', id: symbolsId[','] },
            { word: 'y', id: symbolsId.identificador },
            { word: ',', id: symbolsId[','] },
            { word: 'z', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: 'x', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
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
            { word: 'program', id: symbolsId.program },
            { word: 'testcase', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'x', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: 'x', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] }
        ]);
    });
});
