import {
    nonTerminalSymbols,
    nonTerminalSymbolsIdsType,
    nonTerminalSymbolsValues
} from '../nonTerminalSymbols';
import { symbolsIdsType, symbolsValues } from '../symbols';
import { handleNonTerminal } from './handleNonTerminal';
import { handleTerminal } from './handleTerminal';

export function syntaxAnalysis(tokens: symbolsIdsType[]) {
    const syntaxStack: number[] = [nonTerminalSymbols.programa];
    let currentProduction = syntaxStack.pop();
    let currentToken = tokens[tokens.length - 1];

    while (currentProduction) {
        if (!currentProduction)
            throw new Error('Item não existente para verificar a sintaxe');

        const isTerminal = (symbolsValues as number[]).includes(
            currentProduction
        );
        const isNonTerminal = (nonTerminalSymbolsValues as number[]).includes(
            currentProduction
        );

        if (isTerminal) {
            handleTerminal(currentToken, currentProduction, tokens);
        }
        if (isNonTerminal) {
            handleNonTerminal(
                currentToken,
                currentProduction as nonTerminalSymbolsIdsType,
                syntaxStack
            );
        }
        currentProduction = syntaxStack.pop();
        currentToken = tokens[tokens.length - 1];
    }
}
