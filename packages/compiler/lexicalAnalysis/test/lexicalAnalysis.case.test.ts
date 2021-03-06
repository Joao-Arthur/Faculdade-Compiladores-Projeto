import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify case expressions', () => {
        const source = `
program CaseProgram;
var
  PossiblePrime: integer;
begin
  readln(PossiblePrime);
  case PossiblePrime of
    2, 3, 5, 7, 9: writeln('PRIME NUMBER SMALLER THAN 10!')
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'caseprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'possibleprime', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'begin', id: symbols.begin },
            { line: 6, word: 'readln', id: symbols.readln },
            { line: 6, word: '(', id: symbols['('] },
            { line: 6, word: 'possibleprime', id: symbols.identificador },
            { line: 6, word: ')', id: symbols[')'] },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'case', id: symbols.case },
            { line: 7, word: 'possibleprime', id: symbols.identificador },
            { line: 7, word: 'of', id: symbols.of },
            { line: 8, word: '2', id: symbols.inteiro },
            { line: 8, word: ',', id: symbols[','] },
            { line: 8, word: '3', id: symbols.inteiro },
            { line: 8, word: ',', id: symbols[','] },
            { line: 8, word: '5', id: symbols.inteiro },
            { line: 8, word: ',', id: symbols[','] },
            { line: 8, word: '7', id: symbols.inteiro },
            { line: 8, word: ',', id: symbols[','] },
            { line: 8, word: '9', id: symbols.inteiro },
            { line: 8, word: ':', id: symbols[':'] },
            { line: 8, word: 'writeln', id: symbols.writeln },
            { line: 8, word: '(', id: symbols['('] },
            {
                line: 8,
                word: 'PRIME NUMBER SMALLER THAN 10!',
                id: symbols.literal
            },
            { line: 8, word: ')', id: symbols[')'] },
            { line: 9, word: 'end', id: symbols.end },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'end', id: symbols.end },
            { line: 10, word: '.', id: symbols['.'] }
        ]);
    });
});
