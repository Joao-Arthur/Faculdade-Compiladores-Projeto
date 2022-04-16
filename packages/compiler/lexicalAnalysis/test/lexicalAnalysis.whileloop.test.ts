import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program WhileLoopProgram;
const
  INTERVAL = 4;
var
  ArrayValue: Array [1..2] of integer;
begin
  ArrayValue[1] := 2;
  ArrayValue[2] := 2048;

  while ArrayValue[1] <= ArrayValue[2] do
  begin
    ArrayValue[2] := ArrayValue[2] - INTERVAL;
  end;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'whileloopprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'const', id: symbols.const },
            { line: 4, word: 'interval', id: symbols.identificador },
            { line: 4, word: '=', id: symbols['='] },
            { line: 4, word: '4', id: symbols.inteiro },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'var', id: symbols.var },
            { line: 6, word: 'arrayvalue', id: symbols.identificador },
            { line: 6, word: ':', id: symbols[':'] },
            { line: 6, word: 'array', id: symbols.array },
            { line: 6, word: '[', id: symbols['['] },
            { line: 6, word: '1', id: symbols.inteiro },
            { line: 6, word: '..', id: symbols['..'] },
            { line: 6, word: '2', id: symbols.inteiro },
            { line: 6, word: ']', id: symbols[']'] },
            { line: 6, word: 'of', id: symbols.of },
            { line: 6, word: 'integer', id: symbols.integer },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'begin', id: symbols.begin },
            { line: 8, word: 'arrayvalue', id: symbols.identificador },
            { line: 8, word: '[', id: symbols['['] },
            { line: 8, word: '1', id: symbols.inteiro },
            { line: 8, word: ']', id: symbols[']'] },
            { line: 8, word: ':=', id: symbols[':='] },
            { line: 8, word: '2', id: symbols.inteiro },
            { line: 8, word: ';', id: symbols[';'] },
            { line: 9, word: 'arrayvalue', id: symbols.identificador },
            { line: 9, word: '[', id: symbols['['] },
            { line: 9, word: '2', id: symbols.inteiro },
            { line: 9, word: ']', id: symbols[']'] },
            { line: 9, word: ':=', id: symbols[':='] },
            { line: 9, word: '2048', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 11, word: 'while', id: symbols.while },
            { line: 11, word: 'arrayvalue', id: symbols.identificador },
            { line: 11, word: '[', id: symbols['['] },
            { line: 11, word: '1', id: symbols.inteiro },
            { line: 11, word: ']', id: symbols[']'] },
            { line: 11, word: '<=', id: symbols['<='] },
            { line: 11, word: 'arrayvalue', id: symbols.identificador },
            { line: 11, word: '[', id: symbols['['] },
            { line: 11, word: '2', id: symbols.inteiro },
            { line: 11, word: ']', id: symbols[']'] },
            { line: 11, word: 'do', id: symbols.do },
            { line: 12, word: 'begin', id: symbols.begin },
            { line: 13, word: 'arrayvalue', id: symbols.identificador },
            { line: 13, word: '[', id: symbols['['] },
            { line: 13, word: '2', id: symbols.inteiro },
            { line: 13, word: ']', id: symbols[']'] },
            { line: 13, word: ':=', id: symbols[':='] },
            { line: 13, word: 'arrayvalue', id: symbols.identificador },
            { line: 13, word: '[', id: symbols['['] },
            { line: 13, word: '2', id: symbols.inteiro },
            { line: 13, word: ']', id: symbols[']'] },
            { line: 13, word: '-', id: symbols['-'] },
            { line: 13, word: 'interval', id: symbols.identificador },
            { line: 13, word: ';', id: symbols[';'] },
            { line: 14, word: 'end', id: symbols.end },
            { line: 14, word: ';', id: symbols[';'] },
            { line: 15, word: 'end', id: symbols.end },
            { line: 15, word: '.', id: symbols['.'] }
        ]);
    });
});
