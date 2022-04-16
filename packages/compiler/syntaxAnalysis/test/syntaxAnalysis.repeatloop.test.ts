import { symbols } from '../../symbols';
import { syntaxAnalysis } from '../syntaxAnalysis';

describe('syntaxAnalysis', () => {
    it('should identify repeat loops', () => {
        const tokens = [
            symbols.program,
            symbols.identificador,
            symbols[';'],
            symbols.var,
            symbols.identificador,
            symbols[':'],
            symbols.integer,
            symbols[';'],
            symbols.begin,
            symbols.identificador,
            symbols[':='],
            symbols.inteiro,
            symbols[';'],
            symbols.repeat,
            symbols.identificador,
            symbols[':='],
            symbols.identificador,
            symbols['*'],
            symbols.inteiro,
            symbols.until,
            symbols.identificador,
            symbols['<>'],
            symbols.inteiro,
            symbols[';'],
            symbols.readln,
            symbols['('],
            symbols.identificador,
            symbols[','],
            symbols.identificador,
            symbols[')'],
            symbols[';'],
            symbols.end,
            symbols['.']
        ].reverse();
        expect(() => syntaxAnalysis(tokens)).not.toThrow();
        expect(tokens).toEqual([]);
    });
});
