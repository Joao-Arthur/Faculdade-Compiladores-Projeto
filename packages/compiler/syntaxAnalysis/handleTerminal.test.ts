import { handleTerminal } from './handleTerminal';
import { symbols } from '../symbols';

describe('handleTerminal', () => {
    it('should remove token from stack if both are equal', () => {
        const tokens = [
            { line: 1, id: symbols.begin },
            { line: 1, id: symbols.end },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols.program }
        ];
        handleTerminal(
            { line: 1, id: symbols.program },
            symbols.program,
            tokens
        );
        handleTerminal(
            { line: 1, id: symbols.identificador },
            symbols.identificador,
            tokens
        );
        handleTerminal({ line: 1, id: symbols[';'] }, symbols[';'], tokens);
        handleTerminal({ line: 1, id: symbols.begin }, symbols.begin, tokens);
        handleTerminal({ line: 1, id: symbols.end }, symbols.end, tokens);

        expect(tokens).toEqual([]);
    });

    it('should remove token from stack if both are equal', () => {
        const tokens = [
            { line: 1, id: symbols.end },
            { line: 1, id: symbols.begin },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols.program }
        ];
        handleTerminal(
            { line: 1, id: symbols.program },
            symbols.program,
            tokens
        );
        handleTerminal(
            { line: 1, id: symbols.identificador },
            symbols.identificador,
            tokens
        );
        handleTerminal({ line: 1, id: symbols[';'] }, symbols[';'], tokens);

        expect(tokens).toEqual([
            { line: 1, id: symbols.end },
            { line: 1, id: symbols.begin }
        ]);
    });

    it('should throw if symbols are different', () => {
        const tokens = [
            { line: 1, id: symbols.end },
            { line: 1, id: symbols.begin },
            { line: 1, id: symbols[';'] },
            { line: 1, id: symbols.identificador },
            { line: 1, id: symbols.program }
        ];
        handleTerminal(
            { line: 1, id: symbols.program },
            symbols.program,
            tokens
        );
        handleTerminal(
            { line: 1, id: symbols.identificador },
            symbols.identificador,
            tokens
        );
        handleTerminal({ line: 1, id: symbols[';'] }, symbols[';'], tokens);

        expect(tokens).toEqual([
            { line: 1, id: symbols.end },
            { line: 1, id: symbols.begin }
        ]);

        expect(() =>
            handleTerminal({ line: 1, id: symbols.begin }, symbols.var, tokens)
        ).toThrow();
    });
});
