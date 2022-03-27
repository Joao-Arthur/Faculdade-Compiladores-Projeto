import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program WhileLoopProgram;
const
  INTERVAL = 4;
var
  ArrayValue: Array of integer;
begin
  ArrayValue[1] := 2;
  ArrayValue[2] := 2048;

  while ArrayValue[1] <= ArrayValue[2] do
  begin
    ArrayValue[2] := ArrayValue[2] - INTERVAL;
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'whileloopprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'const', id: symbolsId.const },
            { word: 'interval', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: '4', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'array', id: symbolsId.array },
            { word: 'of', id: symbolsId.of },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '1', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2048', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'while', id: symbolsId.while },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '1', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: '<=', id: symbolsId['<='] },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: 'do', id: symbolsId.do },
            { word: 'begin', id: symbolsId.begin },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: 'arrayvalue', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: '-', id: symbolsId['-'] },
            { word: 'interval', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
