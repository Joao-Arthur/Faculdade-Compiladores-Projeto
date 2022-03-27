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
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'whileloopprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'const', id: symbolsId.const },
            { line: 4, word: 'interval', id: symbolsId.identificador },
            { line: 4, word: '=', id: symbolsId['='] },
            { line: 4, word: '4', id: symbolsId.inteiro },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'var', id: symbolsId.var },
            { line: 6, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 6, word: ':', id: symbolsId[':'] },
            { line: 6, word: 'array', id: symbolsId.array },
            { line: 6, word: 'of', id: symbolsId.of },
            { line: 6, word: 'integer', id: symbolsId.integer },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'begin', id: symbolsId.begin },
            { line: 8, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 8, word: '[', id: symbolsId['['] },
            { line: 8, word: '1', id: symbolsId.inteiro },
            { line: 8, word: ']', id: symbolsId[']'] },
            { line: 8, word: ':=', id: symbolsId[':='] },
            { line: 8, word: '2', id: symbolsId.inteiro },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 9, word: '[', id: symbolsId['['] },
            { line: 9, word: '2', id: symbolsId.inteiro },
            { line: 9, word: ']', id: symbolsId[']'] },
            { line: 9, word: ':=', id: symbolsId[':='] },
            { line: 9, word: '2048', id: symbolsId.inteiro },
            { line: 9, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'while', id: symbolsId.while },
            { line: 11, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 11, word: '[', id: symbolsId['['] },
            { line: 11, word: '1', id: symbolsId.inteiro },
            { line: 11, word: ']', id: symbolsId[']'] },
            { line: 11, word: '<=', id: symbolsId['<='] },
            { line: 11, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 11, word: '[', id: symbolsId['['] },
            { line: 11, word: '2', id: symbolsId.inteiro },
            { line: 11, word: ']', id: symbolsId[']'] },
            { line: 11, word: 'do', id: symbolsId.do },
            { line: 12, word: 'begin', id: symbolsId.begin },
            { line: 13, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 13, word: '[', id: symbolsId['['] },
            { line: 13, word: '2', id: symbolsId.inteiro },
            { line: 13, word: ']', id: symbolsId[']'] },
            { line: 13, word: ':=', id: symbolsId[':='] },
            { line: 13, word: 'arrayvalue', id: symbolsId.identificador },
            { line: 13, word: '[', id: symbolsId['['] },
            { line: 13, word: '2', id: symbolsId.inteiro },
            { line: 13, word: ']', id: symbolsId[']'] },
            { line: 13, word: '-', id: symbolsId['-'] },
            { line: 13, word: 'interval', id: symbolsId.identificador },
            { line: 13, word: ';', id: symbolsId[';'] },
            { line: 14, word: 'end', id: symbolsId.end },
            { line: 14, word: ';', id: symbolsId[';'] },
            { line: 15, word: 'end', id: symbolsId.end },
            { line: 15, word: '.', id: symbolsId['.'] }
        ]);
    });
});
