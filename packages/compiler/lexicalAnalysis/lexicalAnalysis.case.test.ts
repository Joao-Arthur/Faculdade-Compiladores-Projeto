import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

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
            { word: 'program', id: symbolsId.program },
            { word: 'caseprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'possibleprime', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'possibleprime', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'readln', id: symbolsId.readln },
            { word: '(', id: symbolsId['('] },
            { word: '1', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '1', id: symbolsId.inteiro },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'case', id: symbolsId.case },
            { word: 'possibleprime', id: symbolsId.identificador },
            { word: 'of', id: symbolsId.of },
            { word: '2', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '3', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '5', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '7', id: symbolsId.inteiro },
            { word: ',', id: symbolsId[','] },
            { word: '9', id: symbolsId.inteiro },
            { word: ':', id: symbolsId[':'] },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            { word: 'prime number smaller than 10!', id: symbolsId.literal },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'else', id: symbolsId.else },
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            {
                word: 'not a prime number smaller than 10!',
                id: symbolsId.literal
            },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
