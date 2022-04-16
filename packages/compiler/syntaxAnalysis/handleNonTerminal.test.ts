import { handleNonTerminal } from './handleNonTerminal';
import { symbols } from '../symbols';
import { nonTerminalSymbols } from '../nonTerminalSymbols';
import { terminalOrNonTerminal } from '../types';

describe('handleNonTerminal', () => {
    it('should remove token from stack if both are equal', () => {
        const syntaxStack: terminalOrNonTerminal[] = [];
        handleNonTerminal(
            symbols.program,
            nonTerminalSymbols.programa,
            syntaxStack
        );

        expect(syntaxStack).toEqual([
            symbols.program,
            symbols.identificador,
            symbols[';'],
            nonTerminalSymbols.bloco,
            symbols['.']
        ]);
    });
});
