import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify procedure calls', () => {
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
    writeln('== Before: ', CurrentValue);
    CurrentValue := (MINVALUE + NUMBERVALUE / 28 + 9) * 2;
    writeln('== After: ', CurrentValue);
  end;
begin
  call PrintValue;
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
            { line: 12, word: 'writeln', id: symbols.writeln },
            { line: 12, word: '(', id: symbols['('] },
            { line: 12, word: '== Before: ', id: symbols.literal },
            { line: 12, word: ',', id: symbols[','] },
            { line: 12, word: 'currentvalue', id: symbols.identificador },
            { line: 12, word: ')', id: symbols[')'] },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'currentvalue', id: symbols.identificador },
            { line: 13, word: ':=', id: symbols[':='] },
            { line: 13, word: '(', id: symbols['('] },
            { line: 13, word: 'minvalue', id: symbols.identificador },
            { line: 13, word: '+', id: symbols['+'] },
            { line: 13, word: 'numbervalue', id: symbols.identificador },
            { line: 13, word: '/', id: symbols['/'] },
            { line: 13, word: '28', id: symbols.inteiro },
            { line: 13, word: '+', id: symbols['+'] },
            { line: 13, word: '9', id: symbols.inteiro },
            { line: 13, word: ')', id: symbols[')'] },
            { line: 13, word: '*', id: symbols['*'] },
            { line: 13, word: '2', id: symbols.inteiro },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'writeln', id: symbols.writeln },
            { line: 14, word: '(', id: symbols['('] },
            { line: 14, word: '== After: ', id: symbols.literal },
            { line: 14, word: ',', id: symbols[','] },
            { line: 14, word: 'currentvalue', id: symbols.identificador },
            { line: 14, word: ')', id: symbols[')'] },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'end', id: symbols.end },
            { line: 15, word: ';', id: symbols[';'] },
            { line: 16, word: 'begin', id: symbols.begin },
            { line: 17, word: 'call', id: symbols.call },
            { line: 17, word: 'printvalue', id: symbols.identificador },
            { line: 17, word: ';', id: symbols[';'] },
            { line: 18, word: 'end', id: symbols.end },
            { line: 18, word: '.', id: symbols['.'] }
        ]);
    });
});
