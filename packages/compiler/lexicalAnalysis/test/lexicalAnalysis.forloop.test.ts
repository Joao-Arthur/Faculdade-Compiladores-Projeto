import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program ForLoopProgram;
var
  values: array of integer;
  i: integer;
begin
  for i := 1 to 99 do
  begin
    values[i] := 10 * i / 2 - 9;
    values[i + 1] := i * 2 + 3;
    writeln('I value is: ', i);
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'forloopprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'values', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'array', id: symbols.array },
            { line: 4, word: 'of', id: symbols.of },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'i', id: symbols.identificador },
            { line: 5, word: ':', id: symbols[':'] },
            { line: 5, word: 'integer', id: symbols.integer },
            { line: 5, word: ';', id: symbols[';'] },
            { line: 6, word: 'begin', id: symbols.begin },
            { line: 7, word: 'for', id: symbols.for },
            { line: 7, word: 'i', id: symbols.identificador },
            { line: 7, word: ':=', id: symbols[':='] },
            { line: 7, word: '1', id: symbols.inteiro },
            { line: 7, word: 'to', id: symbols.to },
            { line: 7, word: '99', id: symbols.inteiro },
            { line: 7, word: 'do', id: symbols.do },
            { line: 8, word: 'begin', id: symbols.begin },
            { line: 9, word: 'values', id: symbols.identificador },
            { line: 9, word: '[', id: symbols['['] },
            { line: 9, word: 'i', id: symbols.identificador },
            { line: 9, word: ']', id: symbols[']'] },
            { line: 9, word: ':=', id: symbols[':='] },
            { line: 9, word: '10', id: symbols.inteiro },
            { line: 9, word: '*', id: symbols['*'] },
            { line: 9, word: 'i', id: symbols.identificador },
            { line: 9, word: '/', id: symbols['/'] },
            { line: 9, word: '2', id: symbols.inteiro },
            { line: 9, word: '-', id: symbols['-'] },
            { line: 9, word: '9', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'values', id: symbols.identificador },
            { line: 10, word: '[', id: symbols['['] },
            { line: 10, word: 'i', id: symbols.identificador },
            { line: 10, word: '+', id: symbols['+'] },
            { line: 10, word: '1', id: symbols.inteiro },
            { line: 10, word: ']', id: symbols[']'] },
            { line: 10, word: ':=', id: symbols[':='] },
            { line: 10, word: 'i', id: symbols.identificador },
            { line: 10, word: '*', id: symbols['*'] },
            { line: 10, word: '2', id: symbols.inteiro },
            { line: 10, word: '+', id: symbols['+'] },
            { line: 10, word: '3', id: symbols.inteiro },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 11, word: 'writeln', id: symbols.writeln },
            { line: 11, word: '(', id: symbols['('] },
            { line: 11, word: 'i value is: ', id: symbols.literal },
            { line: 11, word: ',', id: symbols[','] },
            { line: 11, word: 'i', id: symbols.identificador },
            { line: 11, word: ')', id: symbols[')'] },
            { line: 11, word: ';', id: symbols[';'] },
            { line: 12, word: 'end', id: symbols.end },
            { line: 12, word: ';', id: symbols[';'] },
            { line: 13, word: 'end', id: symbols.end },
            { line: 13, word: '.', id: symbols['.'] }
        ]);
    });
});
