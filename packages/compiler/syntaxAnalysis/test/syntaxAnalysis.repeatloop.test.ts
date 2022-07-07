import { symbols } from '../../symbols';
import { syntaxAnalysis } from '../syntaxAnalysis';

describe('syntaxAnalysis', () => {
    it('should identify repeat loops', () => {
        const tokens = [
            { line: 1, id: symbols.program },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.var },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[':'] },
            { line: 1, id: symbols.integer },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.begin },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[':='] },
            { line: 1, id: symbols.inteiro },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.repeat },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[':='] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols['*'] },
            { line: 1, id: symbols.inteiro },
            { line: 1, id: symbols.until },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols['<>'] },
            { line: 1, id: symbols.inteiro },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.readln },
            { line: 1, id: symbols['('] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[','] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols[')'] },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.end },
            { line: 1, id: symbols['.'] }
        ].reverse();
        expect(() => syntaxAnalysis(tokens)).not.toThrow();
        expect(tokens).toEqual([]);
    });
});
