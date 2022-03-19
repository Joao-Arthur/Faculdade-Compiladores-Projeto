import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program ForLoopProgram;
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
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'forloopprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.const, word: 'const' },
            { id: symbolsId.identificador, word: 'interval' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.inteiro, word: '4' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.array, word: 'array' },
            { id: symbolsId.of, word: 'of' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '2048' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.while, word: 'while' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId['<='], word: '<=' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId.do, word: 'do' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'arrayvalue' },
            { id: symbolsId['['], word: '[' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[']'], word: ']' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.identificador, word: 'interval' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
