import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array variables', () => {
        const source = `
program ArrayProgram;
var
  FirstArray: Array [1..6] of integer;
  SecondArray: Array [1..6] of integer;
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
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'arrayprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'firstarray', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'array', id: symbols.array },
            { line: 4, word: '[', id: symbols['['] },
            { line: 4, word: '1', id: symbols.inteiro },
            { line: 4, word: '..', id: symbols['..'] },
            { line: 4, word: '6', id: symbols.inteiro },
            { line: 4, word: ']', id: symbols[']'] },
            { line: 4, word: 'of', id: symbols.of },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'secondarray', id: symbols.identificador },
            { line: 5, word: ':', id: symbols[':'] },
            { line: 5, word: 'array', id: symbols.array },
            { line: 5, word: '[', id: symbols['['] },
            { line: 5, word: '1', id: symbols.inteiro },
            { line: 5, word: '..', id: symbols['..'] },
            { line: 5, word: '6', id: symbols.inteiro },
            { line: 5, word: ']', id: symbols[']'] },
            { line: 5, word: 'of', id: symbols.of },
            { line: 5, word: 'integer', id: symbols.integer },
            { line: 5, word: ';', id: symbols[';'] },
            { line: 6, word: 'begin', id: symbols.begin },
            { line: 7, word: 'firstarray', id: symbols.identificador },
            { line: 7, word: '[', id: symbols['['] },
            { line: 7, word: '1', id: symbols.inteiro },
            { line: 7, word: ']', id: symbols[']'] },
            { line: 7, word: ':=', id: symbols[':='] },
            { line: 7, word: '-', id: symbols['-'] },
            { line: 7, word: '32767', id: symbols.inteiro },
            { line: 7, word: ';', id: symbols[';'] },
            { line: 8, word: 'firstarray', id: symbols.identificador },
            { line: 8, word: '[', id: symbols['['] },
            { line: 8, word: '2', id: symbols.inteiro },
            { line: 8, word: ']', id: symbols[']'] },
            { line: 8, word: ':=', id: symbols[':='] },
            { line: 8, word: '-', id: symbols['-'] },
            { line: 8, word: '2048', id: symbols.inteiro },
            { line: 8, word: ';', id: symbols[';'] },
            { line: 9, word: 'firstarray', id: symbols.identificador },
            { line: 9, word: '[', id: symbols['['] },
            { line: 9, word: '3', id: symbols.inteiro },
            { line: 9, word: ']', id: symbols[']'] },
            { line: 9, word: ':=', id: symbols[':='] },
            { line: 9, word: '-', id: symbols['-'] },
            { line: 9, word: '2', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'firstarray', id: symbols.identificador },
            { line: 10, word: '[', id: symbols['['] },
            { line: 10, word: '4', id: symbols.inteiro },
            { line: 10, word: ']', id: symbols[']'] },
            { line: 10, word: ':=', id: symbols[':='] },
            { line: 10, word: '2', id: symbols.inteiro },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 11, word: 'firstarray', id: symbols.identificador },
            { line: 11, word: '[', id: symbols['['] },
            { line: 11, word: '5', id: symbols.inteiro },
            { line: 11, word: ']', id: symbols[']'] },
            { line: 11, word: ':=', id: symbols[':='] },
            { line: 11, word: '2048', id: symbols.inteiro },
            { line: 11, word: ';', id: symbols[';'] },
            { line: 12, word: 'firstarray', id: symbols.identificador },
            { line: 12, word: '[', id: symbols['['] },
            { line: 12, word: '6', id: symbols.inteiro },
            { line: 12, word: ']', id: symbols[']'] },
            { line: 12, word: ':=', id: symbols[':='] },
            { line: 12, word: '32767', id: symbols.inteiro },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'secondarray', id: symbols.identificador },
            { line: 13, word: '[', id: symbols['['] },
            { line: 13, word: '1', id: symbols.inteiro },
            { line: 13, word: ']', id: symbols[']'] },
            { line: 13, word: ':=', id: symbols[':='] },
            { line: 13, word: '-', id: symbols['-'] },
            { line: 13, word: '32767', id: symbols.inteiro },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'secondarray', id: symbols.identificador },
            { line: 14, word: '[', id: symbols['['] },
            { line: 14, word: '2', id: symbols.inteiro },
            { line: 14, word: ']', id: symbols[']'] },
            { line: 14, word: ':=', id: symbols[':='] },
            { line: 14, word: '-', id: symbols['-'] },
            { line: 14, word: '2048', id: symbols.inteiro },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'secondarray', id: symbols.identificador },
            { line: 15, word: '[', id: symbols['['] },
            { line: 15, word: '3', id: symbols.inteiro },
            { line: 15, word: ']', id: symbols[']'] },
            { line: 15, word: ':=', id: symbols[':='] },
            { line: 15, word: '-', id: symbols['-'] },
            { line: 15, word: '2', id: symbols.inteiro },
            { line: 15, word: ';', id: symbols[';'] },
            { line: 16, word: 'secondarray', id: symbols.identificador },
            { line: 16, word: '[', id: symbols['['] },
            { line: 16, word: '4', id: symbols.inteiro },
            { line: 16, word: ']', id: symbols[']'] },
            { line: 16, word: ':=', id: symbols[':='] },
            { line: 16, word: '2', id: symbols.inteiro },
            { line: 16, word: ';', id: symbols[';'] },
            { line: 17, word: 'secondarray', id: symbols.identificador },
            { line: 17, word: '[', id: symbols['['] },
            { line: 17, word: '5', id: symbols.inteiro },
            { line: 17, word: ']', id: symbols[']'] },
            { line: 17, word: ':=', id: symbols[':='] },
            { line: 17, word: '2048', id: symbols.inteiro },
            { line: 17, word: ';', id: symbols[';'] },
            { line: 18, word: 'secondarray', id: symbols.identificador },
            { line: 18, word: '[', id: symbols['['] },
            { line: 18, word: '6', id: symbols.inteiro },
            { line: 18, word: ']', id: symbols[']'] },
            { line: 18, word: ':=', id: symbols[':='] },
            { line: 18, word: '32767', id: symbols.inteiro },
            { line: 18, word: ';', id: symbols[';'] },
            { line: 19, word: 'end', id: symbols.end },
            { line: 19, word: '.', id: symbols['.'] }
        ]);
    });
});
