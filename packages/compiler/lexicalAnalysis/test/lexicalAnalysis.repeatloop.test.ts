import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify repeat loops', () => {
        const source = `
program RepeatLoopProgram;
var
  CompareValue: integer;
begin
  CompareValue := 1;
  repeat
    CompareValue := CompareValue * 10
  until CompareValue <> 10;
  readln(CompareValue, CompareValue);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'repeatloopprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'comparevalue', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'begin', id: symbols.begin },
            { line: 6, word: 'comparevalue', id: symbols.identificador },
            { line: 6, word: ':=', id: symbols[':='] },
            { line: 6, word: '1', id: symbols.inteiro },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'repeat', id: symbols.repeat },
            { line: 8, word: 'comparevalue', id: symbols.identificador },
            { line: 8, word: ':=', id: symbols[':='] },
            { line: 8, word: 'comparevalue', id: symbols.identificador },
            { line: 8, word: '*', id: symbols['*'] },
            { line: 8, word: '10', id: symbols.inteiro },
            { line: 9, word: 'until', id: symbols.until },
            { line: 9, word: 'comparevalue', id: symbols.identificador },
            { line: 9, word: '<>', id: symbols['<>'] },
            { line: 9, word: '10', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'readln', id: symbols.readln },
            { line: 10, word: '(', id: symbols['('] },
            { line: 10, word: 'comparevalue', id: symbols.identificador },
            { line: 10, word: ',', id: symbols[','] },
            { line: 10, word: 'comparevalue', id: symbols.identificador },
            { line: 10, word: ')', id: symbols[')'] },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 11, word: 'end', id: symbols.end },
            { line: 11, word: '.', id: symbols['.'] }
        ]);
    });
});
