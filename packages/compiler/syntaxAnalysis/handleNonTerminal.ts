import {
    nonTerminalSymbolsIds,
    nonTerminalSymbolsIdsType
} from '../nonTerminalSymbols';
import { symbolsIds, symbolsIdsType } from '../symbols';
import { terminalOrNonTerminal } from '../types';
import { findProduction } from './findProduction';
import { symbolToId } from './symbolToId';

export function handleNonTerminal(
    currentToken: symbolsIdsType,
    currentProduction: nonTerminalSymbolsIdsType,
    syntaxStack: terminalOrNonTerminal[]
) {
    const foundProduction = findProduction(
        nonTerminalSymbolsIds[currentProduction as nonTerminalSymbolsIdsType],
        symbolsIds[currentToken]
    );
    if (!foundProduction) throw new Error('sintaxe inválida!');
    foundProduction
        .map(symbolToId)
        .reverse()
        .forEach(symbol => {
            if (symbol) syntaxStack.push(symbol);
        });
}
