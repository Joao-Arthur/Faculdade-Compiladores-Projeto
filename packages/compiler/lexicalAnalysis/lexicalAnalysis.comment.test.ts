import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should ignore comments in the middle of the program', () => {
        const source = `
program CommentsProgram; (*stupid name for a program, after all*)
    (* declaring some integer variables...*)
    var x, y, z: integer;(*another comment*)
begin (*begin*)
    readln(x);(*read line*)
end; (*end*)
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'commentsprogram', id: symbolsId.identificador },
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
            { word: ';', id: symbolsId[';'] }
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
            { word: 'program', id: symbolsId.program },
            { word: 'commentsprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'n', id: symbolsId.identificador },
            { word: ',', id: symbolsId[','] },
            { word: 'um', id: symbolsId.identificador },
            { word: ',', id: symbolsId[','] },
            { word: 'num', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'beg', id: symbolsId.identificador },
            { word: 'in', id: symbolsId.identificador },
            { word: 'n', id: symbolsId.identificador },
            { word: 'um', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: '=', id: symbolsId['='] },
            { word: '19', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
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
