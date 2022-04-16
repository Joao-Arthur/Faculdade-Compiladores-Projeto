import {
    nonTerminalSymbolsIds,
    nonTerminalSymbolsIdsType
} from '../nonTerminalSymbols';
import { symbolsIds, symbolsIdsType } from '../symbols';
import { findProduction } from './findProduction';
import { symbolToId } from './symbolToId';

export function handleNonTerminal(
    currentToken: symbolsIdsType,
    currentProduction: nonTerminalSymbolsIdsType,
    syntaxStack: number[]
) {
    const foundProduction = findProduction(
        nonTerminalSymbolsIds[currentProduction as nonTerminalSymbolsIdsType],
        symbolsIds[currentToken]
    );
    if (foundProduction) {
        foundProduction
            .map(symbolToId)
            .filter(Boolean)
            .forEach(symbol => {
                syntaxStack.push(symbol as number);
            });
    } else {
        throw new Error('produção não encontrada');
    }
}
