import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array', () => {
        const source = `
program ArrayProgram;
var
  FirstArray: Array [1..6] of integer;
  SecondArray: Array of integer;
begin
  FirstArray[1] := -32767;
  FirstArray[2] := -2048;
  FirstArray[3] := -2;
  FirstArray[4] := 2;
  FirstArray[5] := 2048;
  FirstArray[6] := 32767;
  SecondArray[1] := -32767;
  SecondArray[2] := -2048;
  SecondArray[3] := -2;
  SecondArray[4] := 2;
  SecondArray[5] := 2048;
  SecondArray[6] := 32767;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'arrayprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.array, word: 'array' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId['..'], word: '..' },
            { id: symbolsId.inteiro, word: '6' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId.of, word: 'of' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.array, word: 'array' },
            { id: symbolsId.of, word: 'of' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '32767' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '2048' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '3' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '4' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '5' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2048' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'firstarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '6' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '32767' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '32767' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '2048' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '3' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '4' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '5' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2048' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'secondarray' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '6' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '32767' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
