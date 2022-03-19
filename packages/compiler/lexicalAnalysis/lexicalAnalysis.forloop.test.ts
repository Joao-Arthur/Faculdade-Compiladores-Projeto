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
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'forloopprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'values' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.array, word: 'array' },
            { id: symbolsId.of, word: 'of' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.for, word: 'for' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId.to, word: 'to' },
            { id: symbolsId.inteiro, word: '99' },
            { id: symbolsId.do, word: 'do' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'values' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '10' },
            { id: symbolsId['*'], word: '*' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId['/'], word: '/' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '9' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'values' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'i' },
            { id: symbolsId['*'], word: '*' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '3' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
