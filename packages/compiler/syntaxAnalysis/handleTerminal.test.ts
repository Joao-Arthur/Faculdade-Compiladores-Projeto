import { handleTerminal } from './handleTerminal';
import { symbols } from '../symbols';

describe('handleTerminal', () => {
    it('should remove token from stack if both are equal', () => {
        const tokens = [
            symbols.begin,
            symbols.end,
            symbols[';'],
            symbols.identificador,
            symbols.program
        ];
        handleTerminal(symbols.program, symbols.program, tokens);
        handleTerminal(symbols.identificador, symbols.identificador, tokens);
        handleTerminal(symbols[';'], symbols[';'], tokens);
        handleTerminal(symbols.begin, symbols.begin, tokens);
        handleTerminal(symbols.end, symbols.end, tokens);

        expect(tokens).toEqual([]);
    });

    it('should remove token from stack if both are equal', () => {
        const tokens = [
            symbols.end,
            symbols.begin,
            symbols[';'],
            symbols.identificador,
            symbols.program
        ];
        handleTerminal(symbols.program, symbols.program, tokens);
        handleTerminal(symbols.identificador, symbols.identificador, tokens);
        handleTerminal(symbols[';'], symbols[';'], tokens);

        expect(tokens).toEqual([symbols.end, symbols.begin]);
    });

    it('should throw if symbols are different', () => {
        const tokens = [
            symbols.end,
            symbols.begin,
            symbols[';'],
            symbols.identificador,
            symbols.program
        ];
        handleTerminal(symbols.program, symbols.program, tokens);
        handleTerminal(symbols.identificador, symbols.identificador, tokens);
        handleTerminal(symbols[';'], symbols[';'], tokens);

        expect(tokens).toEqual([symbols.end, symbols.begin]);

        expect(() =>
            handleTerminal(symbols.begin, symbols.var, tokens)
        ).toThrow();
    });
});
