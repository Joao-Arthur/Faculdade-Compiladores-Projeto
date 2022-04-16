import { symbols } from '../symbols';
import { syntaxAnalysis } from './syntaxAnalysis';

describe('syntaxAnalysis', () => {
    it('should correct analize working program', () => {
        const tokens = [
            symbols.program,
            symbols.identificador,
            symbols[';'],
            symbols.begin,
            symbols.end,
            symbols['.']
        ].reverse();

        expect(() => syntaxAnalysis(tokens)).not.toThrow();

        expect(tokens).toEqual([]);
    });

    it('should correct analize working program', () => {
        const tokens = [
            symbols.program,
            symbols.identificador,
            symbols[';'],
            symbols.var,
            symbols.identificador,
            symbols[':'],
            symbols.array,
            symbols['['],
            symbols.inteiro,
            symbols['..'],
            symbols.inteiro,
            symbols[']'],
            symbols.of,
            symbols.integer,
            symbols[';'],
            symbols.identificador,
            symbols[':'],
            symbols.integer,
            symbols[';'],
            symbols.begin,
            symbols.for,
            symbols.identificador,
            symbols[':='],
            symbols.inteiro,
            symbols.to,
            symbols.inteiro,
            symbols.do,
            symbols.begin,
            symbols.identificador,
            symbols['['],
            symbols.identificador,
            symbols[']'],
            symbols[':='],
            symbols.inteiro,
            symbols['*'],
            symbols.identificador,
            symbols['/'],
            symbols.inteiro,
            symbols['-'],
            symbols.inteiro,
            symbols[';'],
            symbols.identificador,
            symbols['['],
            symbols.identificador,
            symbols['+'],
            symbols.inteiro,
            symbols[']'],
            symbols[':='],
            symbols.identificador,
            symbols['*'],
            symbols.inteiro,
            symbols['+'],
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
            symbols.end,
            symbols['.']
        ].reverse();

        expect(() => syntaxAnalysis(tokens)).not.toThrow();

        expect(tokens).toEqual([]);
    });
});
