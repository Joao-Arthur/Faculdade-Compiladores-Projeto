import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should handle label and goto', () => {
        const source = `
program gotoProgram;
var
  n, ReadValue, sum, Mean: integer;
begin
  n := 0;
  sum := 0;
  while 1 = 1 do
  begin
    ReadLn(ReadValue);
    if ReadValue < 0 then
      goto done;
    sum := sum + ReadValue;
    n := n + 1;
  end;
  done:
    Mean := sum / n;
    WriteLn('arithemetic mean = ', Mean);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'gotoprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'n', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'readvalue', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'sum', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'mean', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'begin', id: symbols.begin },
            { line: 6, word: 'n', id: symbols.identificador },
            { line: 6, word: ':=', id: symbols[':='] },
            { line: 6, word: '0', id: symbols.inteiro },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'sum', id: symbols.identificador },
            { line: 7, word: ':=', id: symbols[':='] },
            { line: 7, word: '0', id: symbols.inteiro },
            { line: 7, word: ';', id: symbols[';'] },
            { line: 8, word: 'while', id: symbols.while },
            { line: 8, word: '1', id: symbols.inteiro },
            { line: 8, word: '=', id: symbols['='] },
            { line: 8, word: '1', id: symbols.inteiro },
            { line: 8, word: 'do', id: symbols.do },
            { line: 9, word: 'begin', id: symbols.begin },
            { line: 10, word: 'readln', id: symbols.readln },
            { line: 10, word: '(', id: symbols['('] },
            { line: 10, word: 'readvalue', id: symbols.identificador },
            { line: 10, word: ')', id: symbols[')'] },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 11, word: 'if', id: symbols.if },
            { line: 11, word: 'readvalue', id: symbols.identificador },
            { line: 11, word: '<', id: symbols['<'] },
            { line: 11, word: '0', id: symbols.inteiro },
            { line: 11, word: 'then', id: symbols.then },
            { line: 12, word: 'goto', id: symbols.goto },
            { line: 12, word: 'done', id: symbols.identificador },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'sum', id: symbols.identificador },
            { line: 13, word: ':=', id: symbols[':='] },
            { line: 13, word: 'sum', id: symbols.identificador },
            { line: 13, word: '+', id: symbols['+'] },
            { line: 13, word: 'readvalue', id: symbols.identificador },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'n', id: symbols.identificador },
            { line: 14, word: ':=', id: symbols[':='] },
            { line: 14, word: 'n', id: symbols.identificador },
            { line: 14, word: '+', id: symbols['+'] },
            { line: 14, word: '1', id: symbols.inteiro },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'end', id: symbols.end },
            { line: 15, word: ';', id: symbols[';'] },
            { line: 16, word: 'done', id: symbols.identificador },
            { line: 16, word: ':', id: symbols[':'] },
            { line: 17, word: 'mean', id: symbols.identificador },
            { line: 17, word: ':=', id: symbols[':='] },
            { line: 17, word: 'sum', id: symbols.identificador },
            { line: 17, word: '/', id: symbols['/'] },
            { line: 17, word: 'n', id: symbols.identificador },
            { line: 17, word: ';', id: symbols[';'] },
            { line: 18, word: 'writeln', id: symbols.writeln },
            { line: 18, word: '(', id: symbols['('] },
            { line: 18, word: 'arithemetic mean = ', id: symbols.literal },
            { line: 18, word: ',', id: symbols[','] },
            { line: 18, word: 'mean', id: symbols.identificador },
            { line: 18, word: ')', id: symbols[')'] },
            { line: 18, word: ';', id: symbols[';'] },
            { line: 19, word: 'end', id: symbols.end },
            { line: 19, word: '.', id: symbols['.'] }
        ]);
    });
});
