import { symbolsId } from '../../symbols';
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
            { line: 2, word: 'program', id: symbolsId.program },
            { line: 2, word: 'forloopprogram', id: symbolsId.identificador },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'values', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'array', id: symbolsId.array },
            { line: 4, word: 'of', id: symbolsId.of },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'i', id: symbolsId.identificador },
            { line: 5, word: ':', id: symbolsId[':'] },
            { line: 5, word: 'integer', id: symbolsId.integer },
            { line: 5, word: ';', id: symbolsId[';'] },
            { line: 6, word: 'begin', id: symbolsId.begin },
            { line: 7, word: 'for', id: symbolsId.for },
            { line: 7, word: 'i', id: symbolsId.identificador },
            { line: 7, word: ':=', id: symbolsId[':='] },
            { line: 7, word: '1', id: symbolsId.inteiro },
            { line: 7, word: 'to', id: symbolsId.to },
            { line: 7, word: '99', id: symbolsId.inteiro },
            { line: 7, word: 'do', id: symbolsId.do },
            { line: 8, word: 'begin', id: symbolsId.begin },
            { line: 9, word: 'values', id: symbolsId.identificador },
            { line: 9, word: '[', id: symbolsId['['] },
            { line: 9, word: 'i', id: symbolsId.identificador },
            { line: 9, word: ']', id: symbolsId[']'] },
            { line: 9, word: ':=', id: symbolsId[':='] },
            { line: 9, word: '10', id: symbolsId.inteiro },
            { line: 9, word: '*', id: symbolsId['*'] },
            { line: 9, word: 'i', id: symbolsId.identificador },
            { line: 9, word: '/', id: symbolsId['/'] },
            { line: 9, word: '2', id: symbolsId.inteiro },
            { line: 9, word: '-', id: symbolsId['-'] },
            { line: 9, word: '9', id: symbolsId.inteiro },
            { line: 9, word: ';', id: symbolsId[';'] },
            { line: 10, word: 'values', id: symbolsId.identificador },
            { line: 10, word: '[', id: symbolsId['['] },
            { line: 10, word: 'i', id: symbolsId.identificador },
            { line: 10, word: '+', id: symbolsId['+'] },
            { line: 10, word: '1', id: symbolsId.inteiro },
            { line: 10, word: ']', id: symbolsId[']'] },
            { line: 10, word: ':=', id: symbolsId[':='] },
            { line: 10, word: 'i', id: symbolsId.identificador },
            { line: 10, word: '*', id: symbolsId['*'] },
            { line: 10, word: '2', id: symbolsId.inteiro },
            { line: 10, word: '+', id: symbolsId['+'] },
            { line: 10, word: '3', id: symbolsId.inteiro },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 11, word: 'writeln', id: symbolsId.writeln },
            { line: 11, word: '(', id: symbolsId['('] },
            { line: 11, word: 'i value is: ', id: symbolsId.literal },
            { line: 11, word: ',', id: symbolsId[','] },
            { line: 11, word: 'i', id: symbolsId.identificador },
            { line: 11, word: ')', id: symbolsId[')'] },
            { line: 11, word: ';', id: symbolsId[';'] },
            { line: 12, word: 'end', id: symbolsId.end },
            { line: 12, word: ';', id: symbolsId[';'] },
            { line: 13, word: 'end', id: symbolsId.end },
            { line: 13, word: '.', id: symbolsId['.'] }
        ]);
    });
});
