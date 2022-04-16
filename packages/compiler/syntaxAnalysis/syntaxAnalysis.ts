import {
    nonTerminalSymbols,
    nonTerminalSymbolsIdsType,
    nonTerminalSymbolsValues
} from '../nonTerminalSymbols';
import { symbolsIdsType, symbolsValues } from '../symbols';
import { terminalOrNonTerminal } from '../types';
import { handleNonTerminal } from './handleNonTerminal';
import { handleTerminal } from './handleTerminal';

export function syntaxAnalysis(tokens: symbolsIdsType[]) {
    const syntaxStack: terminalOrNonTerminal[] = [nonTerminalSymbols.programa];
    let currentProduction = syntaxStack.pop();
    let currentToken = tokens[tokens.length - 1];

    while (currentProduction) {
        const isTerminal = symbolsValues.includes(currentProduction);
        const isNonTerminal =
            nonTerminalSymbolsValues.includes(currentProduction);
        if (isTerminal)
            handleTerminal(
                currentToken,
                currentProduction as symbolsIdsType,
                tokens
            );
        if (isNonTerminal)
            handleNonTerminal(
                currentToken,
                currentProduction as nonTerminalSymbolsIdsType,
                syntaxStack
            );
        currentProduction = syntaxStack.pop();
        currentToken = tokens[tokens.length - 1];
    }
}
