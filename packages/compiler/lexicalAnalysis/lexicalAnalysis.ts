import { symbols } from '../symbols';
import { numbers } from '../numbers';
import { letters } from '../letters';

type lexicalTokens = {
    id: number;
    word: string;
};

export function lexicalAnalysis(sourceCode: string): lexicalTokens[] {
    let tokens: lexicalTokens[] = [];
    let i = 0;

    let currentFoundToken: any = null;
    let possibleSymbols: any[] = [];
    for (i = 0; i < sourceCode.length; i++) {
        const character = sourceCode[i].toLocaleLowerCase();

        if (!currentFoundToken) {
            if (!possibleSymbols.length) {
                possibleSymbols = symbols.filter(({ symbol }) =>
                    symbol.startsWith(character)
                );

                if (possibleSymbols.length > 1) {
                } else if (possibleSymbols.length === 1) {
                    const [onlyPossibleSymbol] = possibleSymbols;
                    onlyPossibleSymbol.symbol;
                }
            } else {
                possibleSymbols = possibleSymbols.filter();
            }
        }
    }
    return tokens;
}
