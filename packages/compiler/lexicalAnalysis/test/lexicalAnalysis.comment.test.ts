import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should ignore comments in the middle of the program', () => {
        const source = `
program CommentsProgram; (*stupid name for a program, after all*)
    (* declaring some integer variables...*)
    var x, y, z: integer;(*another comment*)
begin (*begin*)
    readln(x);(*read line*)
end. (*end*)
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'commentsprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 4, word: 'var', id: symbolsId.var },
            { line: 4, word: 'x', id: symbolsId.identificador },
            { line: 4, word: ',', id: symbolsId[','] },
            { line: 4, word: 'y', id: symbolsId.identificador },
            { line: 4, word: ',', id: symbolsId[','] },
            { line: 4, word: 'z', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'begin', id: symbolsId.begin },
            { line: 6, word: 'readln', id: symbolsId.readln },
            { line: 6, word: '(', id: symbolsId['('] },
            { line: 6, word: 'x', id: symbolsId.identificador },
            { line: 6, word: ')', id: symbolsId[')'] },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'end', id: symbolsId.end },
            { line: 7, word: '.', id: symbolsId['.'] }
        ]);
    });

    it('comments should break tokens', () => {
        const source = `(*comment before start*)
program CommentsProgram;
var
  N, Um, Num: integer(*random comment*);
beg(*breaking comment*)in
  N(*breaking comment*)um :(*breaking comment*)= 19;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'commentsprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'n', id: symbolsId.identificador },
            { line: 4, word: ',', id: symbolsId[','] },
            { line: 4, word: 'um', id: symbolsId.identificador },
            { line: 4, word: ',', id: symbolsId[','] },
            { line: 4, word: 'num', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'beg', id: symbolsId.identificador },
            { line: 5, word: 'in', id: symbolsId.identificador },
            { line: 6, word: 'n', id: symbolsId.identificador },
            { line: 6, word: 'um', id: symbolsId.identificador },
            { line: 6, word: ':', id: symbolsId[':'] },
            { line: 6, word: '=', id: symbolsId['='] },
            { line: 6, word: '19', id: symbolsId.inteiro },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'end', id: symbolsId.end },
            { line: 7, word: '.', id: symbolsId['.'] }
        ]);
    });

    it('should identify if ends on comment', () => {
        const source = `(*no comments so far*)`;
        expect(lexicalAnalysis(source)).toEqual([]);
    });

    it('should throw on unfinished comment', () => {
        const source = '(*no comments so far';
        expect(() => lexicalAnalysis(source)).toThrow(
            'comentário não encerrado'
        );
        expect(() => lexicalAnalysis('(*)')).toThrow(
            'comentário não encerrado'
        );
    });
});
