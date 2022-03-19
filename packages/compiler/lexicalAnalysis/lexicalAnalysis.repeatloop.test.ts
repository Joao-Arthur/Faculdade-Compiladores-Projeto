import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program RepeatLoopProgram;
var
  CompareValue: integer;
begin
  CompareValue := 1;
  repeat
    CompareValue := CompareValue * 10;
  until CompareValue <> 10;
  readln(CompareValue, CompareValue);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'repeatloopprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '1', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'repeat', id: symbolsId.repeat },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: '*', id: symbolsId['*'] },
            { word: '10', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'until', id: symbolsId.until },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: '<>', id: symbolsId['<>'] },
            { word: '10', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: ',', id: symbolsId[','] },
            { word: 'comparevalue', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
