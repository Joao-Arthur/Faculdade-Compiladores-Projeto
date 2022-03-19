import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program ForLoopProgram;
var
  values: array of integer;
  i: integer;
begin
  for i := 1 to 99 do
  begin
    values[i] := 10 * i / 2 - 9;
    values[i + 1] := i * 2 + 3;
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'forloopprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'values', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'array', id: symbolsId.array },
            { word: 'of', id: symbolsId.of },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'i', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'for', id: symbolsId.for },
            { word: 'i', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '1', id: symbolsId.inteiro },
            { word: 'to', id: symbolsId.to },
            { word: '99', id: symbolsId.inteiro },
            { word: 'do', id: symbolsId.do },
            { word: 'begin', id: symbolsId.begin },
            { word: 'values', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: 'i', id: symbolsId.identificador },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '10', id: symbolsId.inteiro },
            { word: '*', id: symbolsId['*'] },
            { word: 'i', id: symbolsId.identificador },
            { word: '/', id: symbolsId['/'] },
            { word: '2', id: symbolsId.inteiro },
            { word: '-', id: symbolsId['-'] },
            { word: '9', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'values', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: 'i', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: '1', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: 'i', id: symbolsId.identificador },
            { word: '*', id: symbolsId['*'] },
            { word: '2', id: symbolsId.inteiro },
            { word: '+', id: symbolsId['+'] },
            { word: '3', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
