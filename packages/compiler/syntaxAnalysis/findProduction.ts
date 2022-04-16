import { nonTerminalKeys } from '../nonTerminalSymbols';
import { productions } from '../productions';
import { symbolsKeys } from '../symbols';

export function findProduction(
    nonTerminal: nonTerminalKeys,
    terminal: symbolsKeys
): (nonTerminalKeys | symbolsKeys)[] | undefined {
    const productionNonTerminalPart = productions[nonTerminal];
    if (!productionNonTerminalPart) return undefined;
    const productionTerminalPart = productionNonTerminalPart[terminal];
    if (!productionTerminalPart) return undefined;
    return productionTerminalPart;
}
