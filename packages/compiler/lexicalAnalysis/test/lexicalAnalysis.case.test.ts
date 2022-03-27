import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array', () => {
        const source = `
program CaseProgram;
var
  PossiblePrime: integer;
begin
  PossiblePrime := readln(1, 1);
  case PossiblePrime of
    2, 3, 5, 7, 9: writeln('PRIME NUMBER SMALLER THAN 10!');
  else
    writeln('NOT A PRIME NUMBER SMALLER THAN 10!');  
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'caseprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'possibleprime', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'begin', id: symbolsId.begin },
            { line: 6, word: 'possibleprime', id: symbolsId.identificador },
            { line: 6, word: ':=', id: symbolsId[':='] },
            { line: 6, word: 'readln', id: symbolsId.readln },
            { line: 6, word: '(', id: symbolsId['('] },
            { line: 6, word: '1', id: symbolsId.inteiro },
            { line: 6, word: ',', id: symbolsId[','] },
            { line: 6, word: '1', id: symbolsId.inteiro },
            { line: 6, word: ')', id: symbolsId[')'] },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'case', id: symbolsId.case },
            { line: 7, word: 'possibleprime', id: symbolsId.identificador },
            { line: 7, word: 'of', id: symbolsId.of },
            { line: 8, word: '2', id: symbolsId.inteiro },
            { line: 8, word: ',', id: symbolsId[','] },
            { line: 8, word: '3', id: symbolsId.inteiro },
            { line: 8, word: ',', id: symbolsId[','] },
            { line: 8, word: '5', id: symbolsId.inteiro },
            { line: 8, word: ',', id: symbolsId[','] },
            { line: 8, word: '7', id: symbolsId.inteiro },
            { line: 8, word: ',', id: symbolsId[','] },
            { line: 8, word: '9', id: symbolsId.inteiro },
            { line: 8, word: ':', id: symbolsId[':'] },
            { line: 8, word: 'writeln', id: symbolsId.writeln },
            { line: 8, word: '(', id: symbolsId['('] },
            {
                line: 8,
                word: 'prime number smaller than 10!',
                id: symbolsId.literal
            },
            { line: 8, word: ')', id: symbolsId[')'] },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'else', id: symbolsId.else },
            { line: 10, word: 'writeln', id: symbolsId.writeln },
            { line: 10, word: '(', id: symbolsId['('] },
            {
                line: 10,
                word: 'not a prime number smaller than 10!',
                id: symbolsId.literal
            },
            { line: 10, word: ')', id: symbolsId[')'] },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'end', id: symbolsId.end },
            { line: 11, word: ';', id: symbolsId[';'] },
            { line: 12, word: 'end', id: symbolsId.end },
            { line: 12, word: '.', id: symbolsId['.'] }
        ]);
    });
});
