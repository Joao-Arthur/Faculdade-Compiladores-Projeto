import {
    nonTerminalKeys,
    nonTerminalSymbolsIdsType
} from './nonTerminalSymbols';
import { symbolsIdsType, symbolsKeys } from './symbols';

export type literalObject<T> = {
    [key: string]: T;
};

export type terminalOrNonTerminal = symbolsIdsType | nonTerminalSymbolsIdsType;
export type terminalOrNonTerminalKeys = symbolsKeys | nonTerminalKeys;
