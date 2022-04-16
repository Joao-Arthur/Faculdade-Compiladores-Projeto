import { symbols } from '../../symbols';
import { syntaxAnalysis } from '../syntaxAnalysis';

describe('syntaxAnalysis', () => {
    it('should identify case expressions', () => {
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
            symbols.readln,
            symbols['('],
            symbols.identificador,
            symbols[')'],
            symbols[';'],
            symbols.case,
            symbols.identificador,
            symbols.of,
            symbols.inteiro,
            symbols[','],
            symbols.inteiro,
            symbols[','],
            symbols.inteiro,
            symbols[','],
            symbols.inteiro,
            symbols[','],
            symbols.inteiro,
            symbols[':'],
            symbols.writeln,
            symbols['('],
            symbols.literal,
            symbols[')'],
            symbols.end,
            symbols[';'],
            symbols.end,
            symbols['.']
        ].reverse();
        expect(() => syntaxAnalysis(tokens)).not.toThrow();
        expect(tokens).toEqual([]);
    });
});
