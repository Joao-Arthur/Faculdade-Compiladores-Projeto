import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program RepeatLoopProgram;
var
  CompareValue: integer;
begin
  CompareValue := 1;
  repeat
    CompareValue := CompareValue * 10;
    writeln('writeln comparevalue if <> 10 ', CompareValue);
  until CompareValue <> 10;
  readln(CompareValue, CompareValue);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'repeatloopprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'comparevalue', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'begin', id: symbolsId.begin },
            { line: 6, word: 'comparevalue', id: symbolsId.identificador },
            { line: 6, word: ':=', id: symbolsId[':='] },
            { line: 6, word: '1', id: symbolsId.inteiro },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'repeat', id: symbolsId.repeat },
            { line: 8, word: 'comparevalue', id: symbolsId.identificador },
            { line: 8, word: ':=', id: symbolsId[':='] },
            { line: 8, word: 'comparevalue', id: symbolsId.identificador },
            { line: 8, word: '*', id: symbolsId['*'] },
            { line: 8, word: '10', id: symbolsId.inteiro },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'writeln', id: symbolsId.writeln },
            { line: 9, word: '(', id: symbolsId['('] },
            {
                line: 9,
                word: 'writeln comparevalue if <> 10 ',
                id: symbolsId.literal
            },
            { line: 9, word: ',', id: symbolsId[','] },
            { line: 9, word: 'comparevalue', id: symbolsId.identificador },
            { line: 9, word: ')', id: symbolsId[')'] },
            { line: 9, word: ';', id: symbolsId[';'] },
            { line: 10, word: 'until', id: symbolsId.until },
            { line: 10, word: 'comparevalue', id: symbolsId.identificador },
            { line: 10, word: '<>', id: symbolsId['<>'] },
            { line: 10, word: '10', id: symbolsId.inteiro },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'readln', id: symbolsId.readln },
            { line: 11, word: '(', id: symbolsId['('] },
            { line: 11, word: 'comparevalue', id: symbolsId.identificador },
            { line: 11, word: ',', id: symbolsId[','] },
            { line: 11, word: 'comparevalue', id: symbolsId.identificador },
            { line: 11, word: ')', id: symbolsId[')'] },
            { line: 11, word: ';', id: symbolsId[';'] },
            { line: 12, word: 'end', id: symbolsId.end },
            { line: 12, word: '.', id: symbolsId['.'] }
        ]);
    });
});
