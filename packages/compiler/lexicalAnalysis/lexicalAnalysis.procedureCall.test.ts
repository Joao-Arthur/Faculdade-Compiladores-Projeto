import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array', () => {
        const source = `
program ProcedureCallProgram;
const
  NUMBERVALUE = 2398;
var
  procedure PrintValue;
  const
    MINVALUE = 1234;
  var
    CurrentValue: integer;
  begin 
    readln(27, 17);
    CurrentValue := (MINVALUE + NUMBERVALUE / 28 + 9) * 2;
  end;
begin
  procedure PrintValueCopy;
  const
    MINVALUE = 1234;
  var
    CurrentValue: integer;
  begin 
    readln(27, 17);
    CurrentValue := (MINVALUE + NUMBERVALUE / 28 + 9) * 2;
  end;

  call PrintValue;
  call PrintValueCopy;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'procedurecallprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.const, word: 'const' },
            { id: symbolsId.identificador, word: 'numbervalue' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.inteiro, word: '2398' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.procedure, word: 'procedure' },
            { id: symbolsId.identificador, word: 'printvalue' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.const, word: 'const' },
            { id: symbolsId.identificador, word: 'minvalue' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.inteiro, word: '1234' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'currentvalue' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.inteiro, word: '27' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.inteiro, word: '17' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'currentvalue' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'minvalue' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.identificador, word: 'numbervalue' },
            { id: symbolsId['/'], word: '/' },
            { id: symbolsId.inteiro, word: '28' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '9' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId['*'], word: '*' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.procedure, word: 'procedure' },
            { id: symbolsId.identificador, word: 'printvaluecopy' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.const, word: 'const' },
            { id: symbolsId.identificador, word: 'minvalue' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.inteiro, word: '1234' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'currentvalue' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.inteiro, word: '27' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.inteiro, word: '17' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'currentvalue' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'minvalue' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.identificador, word: 'numbervalue' },
            { id: symbolsId['/'], word: '/' },
            { id: symbolsId.inteiro, word: '28' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '9' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId['*'], word: '*' },
            { id: symbolsId.inteiro, word: '2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.call, word: 'call' },
            { id: symbolsId.identificador, word: 'printvalue' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.call, word: 'call' },
            { id: symbolsId.identificador, word: 'printvaluecopy' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
