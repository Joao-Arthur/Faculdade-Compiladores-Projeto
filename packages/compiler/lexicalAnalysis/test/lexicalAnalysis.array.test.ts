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
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'arrayprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'firstarray', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'array', id: symbolsId.array },
            { line: 4, word: '[', id: symbolsId['['] },
            { line: 4, word: '1', id: symbolsId.inteiro },
            { line: 4, word: '..', id: symbolsId['..'] },
            { line: 4, word: '6', id: symbolsId.inteiro },
            { line: 4, word: ']', id: symbolsId[']'] },
            { line: 4, word: 'of', id: symbolsId.of },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'secondarray', id: symbolsId.identificador },
            { line: 5, word: ':', id: symbolsId[':'] },
            { line: 5, word: 'array', id: symbolsId.array },
            { line: 5, word: 'of', id: symbolsId.of },
            { line: 5, word: 'integer', id: symbolsId.integer },
            { line: 5, word: ';', id: symbolsId[';'] },
            { line: 6, word: 'begin', id: symbolsId.begin },
            { line: 7, word: 'firstarray', id: symbolsId.identificador },
            { line: 7, word: '[', id: symbolsId['['] },
            { line: 7, word: '1', id: symbolsId.inteiro },
            { line: 7, word: ']', id: symbolsId[']'] },
            { line: 7, word: ':=', id: symbolsId[':='] },
            { line: 7, word: '-', id: symbolsId['-'] },
            { line: 7, word: '32767', id: symbolsId.inteiro },
            { line: 7, word: ';', id: symbolsId[';'] },
            { line: 8, word: 'firstarray', id: symbolsId.identificador },
            { line: 8, word: '[', id: symbolsId['['] },
            { line: 8, word: '2', id: symbolsId.inteiro },
            { line: 8, word: ']', id: symbolsId[']'] },
            { line: 8, word: ':=', id: symbolsId[':='] },
            { line: 8, word: '-', id: symbolsId['-'] },
            { line: 8, word: '2048', id: symbolsId.inteiro },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'firstarray', id: symbolsId.identificador },
            { line: 9, word: '[', id: symbolsId['['] },
            { line: 9, word: '3', id: symbolsId.inteiro },
            { line: 9, word: ']', id: symbolsId[']'] },
            { line: 9, word: ':=', id: symbolsId[':='] },
            { line: 9, word: '-', id: symbolsId['-'] },
            { line: 9, word: '2', id: symbolsId.inteiro },
            { line: 9, word: ';', id: symbolsId[';'] },
            { line: 10, word: 'firstarray', id: symbolsId.identificador },
            { line: 10, word: '[', id: symbolsId['['] },
            { line: 10, word: '4', id: symbolsId.inteiro },
            { line: 10, word: ']', id: symbolsId[']'] },
            { line: 10, word: ':=', id: symbolsId[':='] },
            { line: 10, word: '2', id: symbolsId.inteiro },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'firstarray', id: symbolsId.identificador },
            { line: 11, word: '[', id: symbolsId['['] },
            { line: 11, word: '5', id: symbolsId.inteiro },
            { line: 11, word: ']', id: symbolsId[']'] },
            { line: 11, word: ':=', id: symbolsId[':='] },
            { line: 11, word: '2048', id: symbolsId.inteiro },
            { line: 11, word: ';', id: symbolsId[';'] },
            { line: 12, word: 'firstarray', id: symbolsId.identificador },
            { line: 12, word: '[', id: symbolsId['['] },
            { line: 12, word: '6', id: symbolsId.inteiro },
            { line: 12, word: ']', id: symbolsId[']'] },
            { line: 12, word: ':=', id: symbolsId[':='] },
            { line: 12, word: '32767', id: symbolsId.inteiro },
            { line: 12, word: ';', id: symbolsId[';'] },
            { line: 13, word: 'secondarray', id: symbolsId.identificador },
            { line: 13, word: '[', id: symbolsId['['] },
            { line: 13, word: '1', id: symbolsId.inteiro },
            { line: 13, word: ']', id: symbolsId[']'] },
            { line: 13, word: ':=', id: symbolsId[':='] },
            { line: 13, word: '-', id: symbolsId['-'] },
            { line: 13, word: '32767', id: symbolsId.inteiro },
            { line: 13, word: ';', id: symbolsId[';'] },
            { line: 14, word: 'secondarray', id: symbolsId.identificador },
            { line: 14, word: '[', id: symbolsId['['] },
            { line: 14, word: '2', id: symbolsId.inteiro },
            { line: 14, word: ']', id: symbolsId[']'] },
            { line: 14, word: ':=', id: symbolsId[':='] },
            { line: 14, word: '-', id: symbolsId['-'] },
            { line: 14, word: '2048', id: symbolsId.inteiro },
            { line: 14, word: ';', id: symbolsId[';'] },
            { line: 15, word: 'secondarray', id: symbolsId.identificador },
            { line: 15, word: '[', id: symbolsId['['] },
            { line: 15, word: '3', id: symbolsId.inteiro },
            { line: 15, word: ']', id: symbolsId[']'] },
            { line: 15, word: ':=', id: symbolsId[':='] },
            { line: 15, word: '-', id: symbolsId['-'] },
            { line: 15, word: '2', id: symbolsId.inteiro },
            { line: 15, word: ';', id: symbolsId[';'] },
            { line: 16, word: 'secondarray', id: symbolsId.identificador },
            { line: 16, word: '[', id: symbolsId['['] },
            { line: 16, word: '4', id: symbolsId.inteiro },
            { line: 16, word: ']', id: symbolsId[']'] },
            { line: 16, word: ':=', id: symbolsId[':='] },
            { line: 16, word: '2', id: symbolsId.inteiro },
            { line: 16, word: ';', id: symbolsId[';'] },
            { line: 17, word: 'secondarray', id: symbolsId.identificador },
            { line: 17, word: '[', id: symbolsId['['] },
            { line: 17, word: '5', id: symbolsId.inteiro },
            { line: 17, word: ']', id: symbolsId[']'] },
            { line: 17, word: ':=', id: symbolsId[':='] },
            { line: 17, word: '2048', id: symbolsId.inteiro },
            { line: 17, word: ';', id: symbolsId[';'] },
            { line: 18, word: 'secondarray', id: symbolsId.identificador },
            { line: 18, word: '[', id: symbolsId['['] },
            { line: 18, word: '6', id: symbolsId.inteiro },
            { line: 18, word: ']', id: symbolsId[']'] },
            { line: 18, word: ':=', id: symbolsId[':='] },
            { line: 18, word: '32767', id: symbolsId.inteiro },
            { line: 18, word: ';', id: symbolsId[';'] },
            { line: 19, word: 'end', id: symbolsId.end },
            { line: 19, word: '.', id: symbolsId['.'] }
        ]);
    });
});
