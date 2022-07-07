import { handleNonTerminal } from './handleNonTerminal';
import { symbols } from '../symbols';
import { nonTerminalSymbols } from '../nonTerminalSymbols';
import { terminalOrNonTerminal } from '../types';

describe('handleNonTerminal', () => {
    it('should push found production to stack', () => {
        const syntaxStack: terminalOrNonTerminal[] = [];
        handleNonTerminal(
            { line: 1, id: symbols.program },
            nonTerminalSymbols.programa,
            syntaxStack
        );

        expect(syntaxStack).toEqual([
            symbols['.'],
            nonTerminalSymbols.bloco,
            symbols[';'],
            symbols.identificador,
            symbols.program
        ]);
    });

    it('should push found production to stack', () => {
        const syntaxStack: terminalOrNonTerminal[] = [symbols['.']];
        handleNonTerminal(
            { line: 1, id: symbols.begin },
            nonTerminalSymbols.bloco,
            syntaxStack
        );

        expect(syntaxStack).toEqual([
            symbols['.'],
            nonTerminalSymbols.corpo,
            nonTerminalSymbols.declaracaoProc,
            nonTerminalSymbols.declaracaoVar,
            nonTerminalSymbols.declaracaoConst,
            nonTerminalSymbols.declaracaoRot
        ]);
    });

    it('should throw if production is not found', () => {
        expect(() =>
            handleNonTerminal(
                { line: 1, id: symbols.label },
                nonTerminalSymbols.programa,
                []
            )
        ).toThrow();
    });

    it('should not push empty production to stack', () => {
        const syntaxStack: terminalOrNonTerminal[] = [
            symbols['.'],
            nonTerminalSymbols.corpo,
            nonTerminalSymbols.declaracaoProc,
            nonTerminalSymbols.declaracaoVar,
            nonTerminalSymbols.declaracaoConst
        ];

        handleNonTerminal(
            { line: 1, id: symbols.begin },
            nonTerminalSymbols.declaracaoRot,
            syntaxStack
        );

        expect(syntaxStack).toEqual([
            symbols['.'],
            nonTerminalSymbols.corpo,
            nonTerminalSymbols.declaracaoProc,
            nonTerminalSymbols.declaracaoVar,
            nonTerminalSymbols.declaracaoConst
        ]);
    });
});
