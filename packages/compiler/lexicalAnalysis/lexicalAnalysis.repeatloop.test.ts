import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program ForLoopProgram;
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
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'forloopprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '1' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.repeat, word: 'repeat' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId['*'], word: '*' },
            { id: symbolsId.inteiro, word: '10' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.until, word: 'until' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId['<>'], word: '<>' },
            { id: symbolsId.inteiro, word: '10' },
            { id: symbolsId[';'], word: ';' },

            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.identificador, word: 'comparevalue' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },

            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
