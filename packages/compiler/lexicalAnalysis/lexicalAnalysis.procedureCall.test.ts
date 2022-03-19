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
            { word: 'program', id: symbolsId.program },
            { word: 'procedurecallprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'const', id: symbolsId.const },
            { word: 'numbervalue', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: '2398', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'procedure', id: symbolsId.procedure },
            { word: 'printvalue', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'const', id: symbolsId.const },
            { word: 'minvalue', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: '1234', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: '27', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '17', id: symbolsId.inteiro },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            { word: '== before: ', id: symbolsId.literal },
            { word: ',', id: symbolsId[','] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '(', id: symbolsId['('] },
            { word: 'minvalue', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: 'numbervalue', id: symbolsId.identificador },
            { word: '/', id: symbolsId['/'] },
            { word: '28', id: symbolsId.inteiro },
            { word: '+', id: symbolsId['+'] },
            { word: '9', id: symbolsId.inteiro },
            { word: ')', id: symbolsId[')'] },
            { word: '*', id: symbolsId['*'] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            { word: '== after: ', id: symbolsId.literal },
            { word: ',', id: symbolsId[','] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'procedure', id: symbolsId.procedure },
            { word: 'printvaluecopy', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'const', id: symbolsId.const },
            { word: 'minvalue', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: '1234', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: '27', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '17', id: symbolsId.inteiro },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            { word: '== before: ', id: symbolsId.literal },
            { word: ',', id: symbolsId[','] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '(', id: symbolsId['('] },
            { word: 'minvalue', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: 'numbervalue', id: symbolsId.identificador },
            { word: '/', id: symbolsId['/'] },
            { word: '28', id: symbolsId.inteiro },
            { word: '+', id: symbolsId['+'] },
            { word: '9', id: symbolsId.inteiro },
            { word: ')', id: symbolsId[')'] },
            { word: '*', id: symbolsId['*'] },
            { word: '2', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            { word: '== after: ', id: symbolsId.literal },
            { word: ',', id: symbolsId[','] },
            { word: 'currentvalue', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] },
            { word: 'call', id: symbolsId.call },
            { word: 'printvalue', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'call', id: symbolsId.call },
            { word: 'printvaluecopy', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
