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
    for (i = 0; i < sourceCode.length; i++) {
        const character = sourceCode[i].toLocaleLowerCase();
        const nextCharacter = sourceCode[i + 1]?.toLocaleLowerCase();
        const isLastCharacter = i === sourceCode.length - 1;

        if (!currentFoundToken) {
            const symbol = symbols
                .filter(({ id }) => ![25, 26, 48].includes(id))
                .find(({ symbol }) => symbol.startsWith(character));
            if (symbol) {
                currentFoundToken = symbol;
            } else if (numbers.includes(character)) {
                currentFoundToken = symbols.find(({ id }) => id === 26);
            }
        }
    }
    return tokens;
}
