import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array', () => {
        const source = `
program ArrayProgram;
var
  FirstArray: Array [1..6] of integer;
  SecondArray: Array of integer;
begin
  FirstArray[1] := -32767; (*test negative min value*)
  FirstArray[2] := -2048;
  FirstArray[3] := -2;
  FirstArray[4] := 2;
  FirstArray[5] := 2048;
  FirstArray[6] := 32767; (*test positive max value*)
  SecondArray[1] := -32767; (*test negative min value*)
  SecondArray[2] := -2048;
  SecondArray[3] := -2;
  SecondArray[4] := 2;
  SecondArray[5] := 2048;
  SecondArray[6] := 32767; (*test positive max value*)
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'arrayprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'array', id: symbolsId.array },
            { word: '[', id: symbolsId['['] },
            { word: '1', id: symbolsId.inteiro },
            { word: '..', id: symbolsId['..'] },
            { word: '6', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: 'of', id: symbolsId.of },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'array', id: symbolsId.array },
            { word: 'of', id: symbolsId.of },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '1', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '32767', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '2048', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '3', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '4', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '5', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2048', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'firstarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '6', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '32767', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '1', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '32767', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '2', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '2048', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '3', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '4', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '5', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '2048', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'secondarray', id: symbolsId.identificador },
            { word: '[', id: symbolsId['['] },
            { word: '6', id: symbolsId.inteiro },
            { word: ']', id: symbolsId[']'] },
            { word: ':=', id: symbolsId[':='] },
            { word: '32767', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
