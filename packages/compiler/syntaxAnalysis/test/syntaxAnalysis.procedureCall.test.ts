import { symbols } from '../../symbols';
import { syntaxAnalysis } from '../syntaxAnalysis';

describe('syntaxAnalysis', () => {
    it('should identify procedure calls', () => {
        const tokens = [
            symbols.program,
            symbols.identificador,
            symbols[';'],
            symbols.const,
            symbols.identificador,
            symbols['='],
            symbols.inteiro,
            symbols[';'],
            symbols.procedure,
            symbols.identificador,
            symbols['('],
            symbols.identificador,
            symbols[':'],
            symbols.integer,
            symbols[')'],
            symbols[';'],
            symbols.const,
            symbols.identificador,
            symbols['='],
            symbols.inteiro,
            symbols[';'],
            symbols.var,
            symbols.identificador,
            symbols[':'],
            symbols.integer,
            symbols[';'],
            symbols.begin,
            symbols.writeln,
            symbols['('],
            symbols.literal,
            symbols[','],
            symbols.identificador,
            symbols[')'],
            symbols[';'],
            symbols.identificador,
            symbols[':='],
            symbols['('],
            symbols.identificador,
            symbols['+'],
            symbols.identificador,
            symbols['/'],
            symbols.inteiro,
            symbols['+'],
            symbols.inteiro,
            symbols[')'],
            symbols['*'],
            symbols.inteiro,
            symbols[';'],
            symbols.writeln,
            symbols['('],
            symbols.literal,
            symbols[','],
            symbols.identificador,
            symbols[')'],
            symbols[';'],
            symbols.end,
            symbols[';'],
            symbols.begin,
            symbols.call,
            symbols.identificador,
            symbols[';'],
            symbols.call,
            symbols.identificador,
            symbols[';'],
            symbols.end,
            symbols['.']
        ].reverse();
        expect(() => syntaxAnalysis(tokens)).not.toThrow();
        expect(tokens).toEqual([]);
    });
});