import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify procedure calls', () => {
        const source = `
program ProcedureCallProgram;
const
  NUMBERVALUE = 2398;
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
            { line: 5, word: 'procedure', id: symbols.procedure },
            { line: 5, word: 'printvalue', id: symbols.identificador },
            { line: 5, word: ';', id: symbols[';'] },
            { line: 6, word: 'const', id: symbols.const },
            { line: 7, word: 'minvalue', id: symbols.identificador },
            { line: 7, word: '=', id: symbols['='] },
            { line: 7, word: '1234', id: symbols.inteiro },
            { line: 7, word: ';', id: symbols[';'] },
            { line: 8, word: 'var', id: symbols.var },
            { line: 9, word: 'currentvalue', id: symbols.identificador },
            { line: 9, word: ':', id: symbols[':'] },
            { line: 9, word: 'integer', id: symbols.integer },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'begin', id: symbols.begin },
            { line: 11, word: 'writeln', id: symbols.writeln },
            { line: 11, word: '(', id: symbols['('] },
            { line: 11, word: '== Before: ', id: symbols.literal },
            { line: 11, word: ',', id: symbols[','] },
            { line: 11, word: 'currentvalue', id: symbols.identificador },
            { line: 11, word: ')', id: symbols[')'] },
            { line: 11, word: ';', id: symbols[';'] },
            { line: 12, word: 'currentvalue', id: symbols.identificador },
            { line: 12, word: ':=', id: symbols[':='] },
            { line: 12, word: '(', id: symbols['('] },
            { line: 12, word: 'minvalue', id: symbols.identificador },
            { line: 12, word: '+', id: symbols['+'] },
            { line: 12, word: 'numbervalue', id: symbols.identificador },
            { line: 12, word: '/', id: symbols['/'] },
            { line: 12, word: '28', id: symbols.inteiro },
            { line: 12, word: '+', id: symbols['+'] },
            { line: 12, word: '9', id: symbols.inteiro },
            { line: 12, word: ')', id: symbols[')'] },
            { line: 12, word: '*', id: symbols['*'] },
            { line: 12, word: '2', id: symbols.inteiro },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'writeln', id: symbols.writeln },
            { line: 13, word: '(', id: symbols['('] },
            { line: 13, word: '== After: ', id: symbols.literal },
            { line: 13, word: ',', id: symbols[','] },
            { line: 13, word: 'currentvalue', id: symbols.identificador },
            { line: 13, word: ')', id: symbols[')'] },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'end', id: symbols.end },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'begin', id: symbols.begin },
            { line: 16, word: 'call', id: symbols.call },
            { line: 16, word: 'printvalue', id: symbols.identificador },
            { line: 16, word: ';', id: symbols[';'] },
            { line: 17, word: 'end', id: symbols.end },
            { line: 17, word: '.', id: symbols['.'] }
        ]);
    });
});
