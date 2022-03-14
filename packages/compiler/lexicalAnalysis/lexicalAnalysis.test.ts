import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should run', () => {
        const source = `program teste123;
    var x, y, z: integer.
begin
    readln(x);
    readln(y);
end;`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: 1, word: 'program' },
            { id: 25, word: 'teste123' },
            { id: 47, word: ';' },
            { id: 4, word: 'var' },
            { id: 25, word: 'x' },
            { id: 46, word: ',' },
            { id: 25, word: 'y' },
            { id: 46, word: ',' },
            { id: 25, word: 'z' },
            { id: 39, word: ':' },
            { id: 8, word: 'integer' },
            { id: 47, word: ';' },
            { id: 6, word: 'begin' },
            { id: 20, word: 'readln' },
            { id: 36, word: '(' },
            { id: 25, word: 'x' },
            { id: 37, word: ')' },
            { id: 47, word: ';' },
            { id: 7, word: 'end' },
            { id: 47, word: ';' }
        ]);
    });
});
