import { symbols } from '../../symbols';
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
            { line: 2, word: 'program', id: symbols.program },
            {
                line: 2,
                word: 'procedurecallprogram',
                id: symbols.identificador
            },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'const', id: symbols.const },
            { line: 4, word: 'numbervalue', id: symbols.identificador },
            { line: 4, word: '=', id: symbols['='] },
            { line: 4, word: '2398', id: symbols.inteiro },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'var', id: symbols.var },
            { line: 6, word: 'procedure', id: symbols.procedure },
            { line: 6, word: 'printvalue', id: symbols.identificador },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'const', id: symbols.const },
            { line: 8, word: 'minvalue', id: symbols.identificador },
            { line: 8, word: '=', id: symbols['='] },
            { line: 8, word: '1234', id: symbols.inteiro },
            { line: 8, word: ';', id: symbols[';'] },
            { line: 9, word: 'var', id: symbols.var },
            { line: 10, word: 'currentvalue', id: symbols.identificador },
            { line: 10, word: ':', id: symbols[':'] },
            { line: 10, word: 'integer', id: symbols.integer },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 11, word: 'begin', id: symbols.begin },
            { line: 12, word: 'readln', id: symbols.readln },
            { line: 12, word: '(', id: symbols['('] },
            { line: 12, word: '27', id: symbols.inteiro },
            { line: 12, word: ',', id: symbols[','] },
            { line: 12, word: '17', id: symbols.inteiro },
            { line: 12, word: ')', id: symbols[')'] },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'writeln', id: symbols.writeln },
            { line: 13, word: '(', id: symbols['('] },
            { line: 13, word: '== before: ', id: symbols.literal },
            { line: 13, word: ',', id: symbols[','] },
            { line: 13, word: 'currentvalue', id: symbols.identificador },
            { line: 13, word: ')', id: symbols[')'] },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'currentvalue', id: symbols.identificador },
            { line: 14, word: ':=', id: symbols[':='] },
            { line: 14, word: '(', id: symbols['('] },
            { line: 14, word: 'minvalue', id: symbols.identificador },
            { line: 14, word: '+', id: symbols['+'] },
            { line: 14, word: 'numbervalue', id: symbols.identificador },
            { line: 14, word: '/', id: symbols['/'] },
            { line: 14, word: '28', id: symbols.inteiro },
            { line: 14, word: '+', id: symbols['+'] },
            { line: 14, word: '9', id: symbols.inteiro },
            { line: 14, word: ')', id: symbols[')'] },
            { line: 14, word: '*', id: symbols['*'] },
            { line: 14, word: '2', id: symbols.inteiro },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'writeln', id: symbols.writeln },
            { line: 15, word: '(', id: symbols['('] },
            { line: 15, word: '== after: ', id: symbols.literal },
            { line: 15, word: ',', id: symbols[','] },
            { line: 15, word: 'currentvalue', id: symbols.identificador },
            { line: 15, word: ')', id: symbols[')'] },
            { line: 15, word: ';', id: symbols[';'] },
            { line: 16, word: 'end', id: symbols.end },
            { line: 16, word: ';', id: symbols[';'] },
            { line: 17, word: 'begin', id: symbols.begin },
            { line: 18, word: 'procedure', id: symbols.procedure },
            { line: 18, word: 'printvaluecopy', id: symbols.identificador },
            { line: 18, word: ';', id: symbols[';'] },
            { line: 19, word: 'const', id: symbols.const },
            { line: 20, word: 'minvalue', id: symbols.identificador },
            { line: 20, word: '=', id: symbols['='] },
            { line: 20, word: '1234', id: symbols.inteiro },
            { line: 20, word: ';', id: symbols[';'] },
            { line: 21, word: 'var', id: symbols.var },
            { line: 22, word: 'currentvalue', id: symbols.identificador },
            { line: 22, word: ':', id: symbols[':'] },
            { line: 22, word: 'integer', id: symbols.integer },
            { line: 22, word: ';', id: symbols[';'] },
            { line: 23, word: 'begin', id: symbols.begin },
            { line: 24, word: 'readln', id: symbols.readln },
            { line: 24, word: '(', id: symbols['('] },
            { line: 24, word: '27', id: symbols.inteiro },
            { line: 24, word: ',', id: symbols[','] },
            { line: 24, word: '17', id: symbols.inteiro },
            { line: 24, word: ')', id: symbols[')'] },
            { line: 24, word: ';', id: symbols[';'] },
            { line: 25, word: 'writeln', id: symbols.writeln },
            { line: 25, word: '(', id: symbols['('] },
            { line: 25, word: '== before: ', id: symbols.literal },
            { line: 25, word: ',', id: symbols[','] },
            { line: 25, word: 'currentvalue', id: symbols.identificador },
            { line: 25, word: ')', id: symbols[')'] },
            { line: 25, word: ';', id: symbols[';'] },
            { line: 26, word: 'currentvalue', id: symbols.identificador },
            { line: 26, word: ':=', id: symbols[':='] },
            { line: 26, word: '(', id: symbols['('] },
            { line: 26, word: 'minvalue', id: symbols.identificador },
            { line: 26, word: '+', id: symbols['+'] },
            { line: 26, word: 'numbervalue', id: symbols.identificador },
            { line: 26, word: '/', id: symbols['/'] },
            { line: 26, word: '28', id: symbols.inteiro },
            { line: 26, word: '+', id: symbols['+'] },
            { line: 26, word: '9', id: symbols.inteiro },
            { line: 26, word: ')', id: symbols[')'] },
            { line: 26, word: '*', id: symbols['*'] },
            { line: 26, word: '2', id: symbols.inteiro },
            { line: 26, word: ';', id: symbols[';'] },
            { line: 27, word: 'writeln', id: symbols.writeln },
            { line: 27, word: '(', id: symbols['('] },
            { line: 27, word: '== after: ', id: symbols.literal },
            { line: 27, word: ',', id: symbols[','] },
            { line: 27, word: 'currentvalue', id: symbols.identificador },
            { line: 27, word: ')', id: symbols[')'] },
            { line: 27, word: ';', id: symbols[';'] },
            { line: 28, word: 'end', id: symbols.end },
            { line: 28, word: ';', id: symbols[';'] },
            { line: 30, word: 'call', id: symbols.call },
            { line: 30, word: 'printvalue', id: symbols.identificador },
            { line: 30, word: ';', id: symbols[';'] },
            { line: 31, word: 'call', id: symbols.call },
            { line: 31, word: 'printvaluecopy', id: symbols.identificador },
            { line: 31, word: ';', id: symbols[';'] },
            { line: 32, word: 'end', id: symbols.end },
            { line: 32, word: '.', id: symbols['.'] }
        ]);
    });
});
