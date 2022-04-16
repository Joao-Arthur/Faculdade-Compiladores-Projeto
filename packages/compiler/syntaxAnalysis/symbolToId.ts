import { symbols } from '../symbols';
import { nonTerminalSymbols } from '../nonTerminalSymbols';
import { terminalOrNonTerminal, terminalOrNonTerminalKeys } from '../types';

export function symbolToId(
    symbol: terminalOrNonTerminalKeys
): terminalOrNonTerminal | undefined {
    if ((nonTerminalSymbols as any)[symbol])
        return (nonTerminalSymbols as any)[symbol];
    if ((symbols as any)[symbol]) return (symbols as any)[symbol];
    return undefined;
}
