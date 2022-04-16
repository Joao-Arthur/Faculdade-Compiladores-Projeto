import { symbolsKeys, symbolsIdsType, symbols } from '../symbols';
import {
    nonTerminalKeys,
    nonTerminalSymbols,
    nonTerminalSymbolsIdsType
} from '../nonTerminalSymbols';

export function symbolToId(
    symbol: symbolsKeys | nonTerminalKeys
): symbolsIdsType | nonTerminalSymbolsIdsType | undefined {
    if ((nonTerminalSymbols as any)[symbol])
        return (nonTerminalSymbols as any)[symbol];
    if ((symbols as any)[symbol]) return (symbols as any)[symbol];
    return undefined;
}
