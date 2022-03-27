import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

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
    writeln('== Before: ', CurrentValue);
    CurrentValue := (MINVALUE + NUMBERVALUE / 28 + 9) * 2;
    writeln('== After: ', CurrentValue);
  end;
begin
  procedure PrintValueCopy;
  const
    MINVALUE = 1234;
  var
    CurrentValue: integer;
  begin 
    readln(27, 17);
    writeln('== Before: ', CurrentValue);
    CurrentValue := (MINVALUE + NUMBERVALUE / 28 + 9) * 2;
    writeln('== After: ', CurrentValue);
  end;

  call PrintValue;
  call PrintValueCopy;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            {
                line: 2,
                word: 'procedurecallprogram',
                id: symbolsId.identificador
            },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'const', id: symbolsId.const },
            { line: 4, word: 'numbervalue', id: symbolsId.identificador },
            { line: 4, word: '=', id: symbolsId['='] },
            { line: 4, word: '2398', id: symbolsId.inteiro },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'var', id: symbolsId.var },
            { line: 6, word: 'procedure', id: symbolsId.procedure },
            { line: 6, word: 'printvalue', id: symbolsId.identificador },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'const', id: symbolsId.const },
            { line: 8, word: 'minvalue', id: symbolsId.identificador },
            { line: 8, word: '=', id: symbolsId['='] },
            { line: 8, word: '1234', id: symbolsId.inteiro },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'var', id: symbolsId.var },
            { line: 10, word: 'currentvalue', id: symbolsId.identificador },
            { line: 10, word: ':', id: symbolsId[':'] },
            { line: 10, word: 'integer', id: symbolsId.integer },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'begin', id: symbolsId.begin },
            { line: 12, word: 'readln', id: symbolsId.readln },
            { line: 12, word: '(', id: symbolsId['('] },
            { line: 12, word: '27', id: symbolsId.inteiro },
            { line: 12, word: ',', id: symbolsId[','] },
            { line: 12, word: '17', id: symbolsId.inteiro },
            { line: 12, word: ')', id: symbolsId[')'] },
            { line: 12, word: ';', id: symbolsId[';'] },
            { line: 13, word: 'writeln', id: symbolsId.writeln },
            { line: 13, word: '(', id: symbolsId['('] },
            { line: 13, word: '== before: ', id: symbolsId.literal },
            { line: 13, word: ',', id: symbolsId[','] },
            { line: 13, word: 'currentvalue', id: symbolsId.identificador },
            { line: 13, word: ')', id: symbolsId[')'] },
            { line: 13, word: ';', id: symbolsId[';'] },
            { line: 14, word: 'currentvalue', id: symbolsId.identificador },
            { line: 14, word: ':=', id: symbolsId[':='] },
            { line: 14, word: '(', id: symbolsId['('] },
            { line: 14, word: 'minvalue', id: symbolsId.identificador },
            { line: 14, word: '+', id: symbolsId['+'] },
            { line: 14, word: 'numbervalue', id: symbolsId.identificador },
            { line: 14, word: '/', id: symbolsId['/'] },
            { line: 14, word: '28', id: symbolsId.inteiro },
            { line: 14, word: '+', id: symbolsId['+'] },
            { line: 14, word: '9', id: symbolsId.inteiro },
            { line: 14, word: ')', id: symbolsId[')'] },
            { line: 14, word: '*', id: symbolsId['*'] },
            { line: 14, word: '2', id: symbolsId.inteiro },
            { line: 14, word: ';', id: symbolsId[';'] },
            { line: 15, word: 'writeln', id: symbolsId.writeln },
            { line: 15, word: '(', id: symbolsId['('] },
            { line: 15, word: '== after: ', id: symbolsId.literal },
            { line: 15, word: ',', id: symbolsId[','] },
            { line: 15, word: 'currentvalue', id: symbolsId.identificador },
            { line: 15, word: ')', id: symbolsId[')'] },
            { line: 15, word: ';', id: symbolsId[';'] },
            { line: 16, word: 'end', id: symbolsId.end },
            { line: 16, word: ';', id: symbolsId[';'] },
            { line: 17, word: 'begin', id: symbolsId.begin },
            { line: 18, word: 'procedure', id: symbolsId.procedure },
            { line: 18, word: 'printvaluecopy', id: symbolsId.identificador },
            { line: 18, word: ';', id: symbolsId[';'] },
            { line: 19, word: 'const', id: symbolsId.const },
            { line: 20, word: 'minvalue', id: symbolsId.identificador },
            { line: 20, word: '=', id: symbolsId['='] },
            { line: 20, word: '1234', id: symbolsId.inteiro },
            { line: 20, word: ';', id: symbolsId[';'] },
            { line: 21, word: 'var', id: symbolsId.var },
            { line: 22, word: 'currentvalue', id: symbolsId.identificador },
            { line: 22, word: ':', id: symbolsId[':'] },
            { line: 22, word: 'integer', id: symbolsId.integer },
            { line: 22, word: ';', id: symbolsId[';'] },
            { line: 23, word: 'begin', id: symbolsId.begin },
            { line: 24, word: 'readln', id: symbolsId.readln },
            { line: 24, word: '(', id: symbolsId['('] },
            { line: 24, word: '27', id: symbolsId.inteiro },
            { line: 24, word: ',', id: symbolsId[','] },
            { line: 24, word: '17', id: symbolsId.inteiro },
            { line: 24, word: ')', id: symbolsId[')'] },
            { line: 24, word: ';', id: symbolsId[';'] },
            { line: 25, word: 'writeln', id: symbolsId.writeln },
            { line: 25, word: '(', id: symbolsId['('] },
            { line: 25, word: '== before: ', id: symbolsId.literal },
            { line: 25, word: ',', id: symbolsId[','] },
            { line: 25, word: 'currentvalue', id: symbolsId.identificador },
            { line: 25, word: ')', id: symbolsId[')'] },
            { line: 25, word: ';', id: symbolsId[';'] },
            { line: 26, word: 'currentvalue', id: symbolsId.identificador },
            { line: 26, word: ':=', id: symbolsId[':='] },
            { line: 26, word: '(', id: symbolsId['('] },
            { line: 26, word: 'minvalue', id: symbolsId.identificador },
            { line: 26, word: '+', id: symbolsId['+'] },
            { line: 26, word: 'numbervalue', id: symbolsId.identificador },
            { line: 26, word: '/', id: symbolsId['/'] },
            { line: 26, word: '28', id: symbolsId.inteiro },
            { line: 26, word: '+', id: symbolsId['+'] },
            { line: 26, word: '9', id: symbolsId.inteiro },
            { line: 26, word: ')', id: symbolsId[')'] },
            { line: 26, word: '*', id: symbolsId['*'] },
            { line: 26, word: '2', id: symbolsId.inteiro },
            { line: 26, word: ';', id: symbolsId[';'] },
            { line: 27, word: 'writeln', id: symbolsId.writeln },
            { line: 27, word: '(', id: symbolsId['('] },
            { line: 27, word: '== after: ', id: symbolsId.literal },
            { line: 27, word: ',', id: symbolsId[','] },
            { line: 27, word: 'currentvalue', id: symbolsId.identificador },
            { line: 27, word: ')', id: symbolsId[')'] },
            { line: 27, word: ';', id: symbolsId[';'] },
            { line: 28, word: 'end', id: symbolsId.end },
            { line: 28, word: ';', id: symbolsId[';'] },
            { line: 30, word: 'call', id: symbolsId.call },
            { line: 30, word: 'printvalue', id: symbolsId.identificador },
            { line: 30, word: ';', id: symbolsId[';'] },
            { line: 31, word: 'call', id: symbolsId.call },
            { line: 31, word: 'printvaluecopy', id: symbolsId.identificador },
            { line: 31, word: ';', id: symbolsId[';'] },
            { line: 32, word: 'end', id: symbolsId.end },
            { line: 32, word: '.', id: symbolsId['.'] }
        ]);
    });
});
