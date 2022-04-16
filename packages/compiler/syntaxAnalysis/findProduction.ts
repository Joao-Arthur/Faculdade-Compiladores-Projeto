import { nonTerminalKeys } from '../nonTerminalSymbols';
import { productions } from '../productions';
import { symbolsKeys } from '../symbols';
import { terminalOrNonTerminalKeys } from '../types';

export function findProduction(
    nonTerminal: nonTerminalKeys,
    terminal: symbolsKeys
): terminalOrNonTerminalKeys[] | undefined {
    const productionNonTerminalPart = productions[nonTerminal];
    if (!productionNonTerminalPart) return undefined;
    const productionTerminalPart = productionNonTerminalPart[terminal];
    if (!productionTerminalPart) return undefined;
    return productionTerminalPart;
}
