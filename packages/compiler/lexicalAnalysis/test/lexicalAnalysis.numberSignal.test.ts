import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify while loops', () => {
        const source = `
program NumberSignalProgram;
var
  Number: Integer;
begin
  Number := +23;
  Number := Number + 45;
  Number := -567;
  Number := Number - 87;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'numbersignalprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'number', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'begin', id: symbols.begin },
            { line: 6, word: 'number', id: symbols.identificador },
            { line: 6, word: ':=', id: symbols[':='] },
            { line: 6, word: '23', id: symbols.inteiro },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'number', id: symbols.identificador },
            { line: 7, word: ':=', id: symbols[':='] },
            { line: 7, word: 'number', id: symbols.identificador },
            { line: 7, word: '+', id: symbols['+'] },
            { line: 7, word: '45', id: symbols.inteiro },
            { line: 7, word: ';', id: symbols[';'] },
            { line: 8, word: 'number', id: symbols.identificador },
            { line: 8, word: ':=', id: symbols[':='] },
            { line: 8, word: '-567', id: symbols.inteiro },
            { line: 8, word: ';', id: symbols[';'] },
            { line: 9, word: 'number', id: symbols.identificador },
            { line: 9, word: ':=', id: symbols[':='] },
            { line: 9, word: 'number', id: symbols.identificador },
            { line: 9, word: '-', id: symbols['-'] },
            { line: 9, word: '87', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'end', id: symbols.end },
            { line: 10, word: '.', id: symbols['.'] }
        ]);
    });
});
