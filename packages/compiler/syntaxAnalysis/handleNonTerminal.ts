import {
    nonTerminalSymbolsIds,
    nonTerminalSymbolsIdsType
} from '../nonTerminalSymbols';
import { symbolsIds } from '../symbols';
import { terminalOrNonTerminal } from '../types';
import { InvalidSyntaxException } from './exceptions/InvalidSyntaxException';
import { findProduction } from './findProduction';
import { symbolToId } from './symbolToId';
import { syntaxToken } from './types';

export function handleNonTerminal(
    currentToken: syntaxToken,
    currentProduction: nonTerminalSymbolsIdsType,
    syntaxStack: terminalOrNonTerminal[]
) {
    const foundProduction = findProduction(
        nonTerminalSymbolsIds[currentProduction as nonTerminalSymbolsIdsType],
        symbolsIds[currentToken.id]
    );
    if (!foundProduction) throw new InvalidSyntaxException(currentToken.line);
    foundProduction
        .map(symbolToId)
        .reverse()
        .forEach(symbol => {
            if (symbol) syntaxStack.push(symbol);
        });
}
