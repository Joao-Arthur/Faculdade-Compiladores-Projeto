import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should ignore comments', () => {
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
});
