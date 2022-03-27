import { literalObject } from '../types';
import { symbols } from '../symbols';
import { currentWord, token } from './types';

export function addCurrentWordToStack(
    tokens: token[],
    currentWord: currentWord,
    line: number
) {
    switch (currentWord.type) {
        case 'string':
            tokens.push({
                line,
                id: symbols.literal,
                word: currentWord.word
            });
            break;
        case 'numeric':
            tokens.push({
                line,
                id: symbols.inteiro,
                word: currentWord.word
            });
            break;
        case 'identifier':
            tokens.push({
                line,
                id: symbols.identificador,
                word: currentWord.word
            });
            break;
        case 'autoMatch':
        case 'semiAutoMatch':
        case 'reservedWord':
            const foundId = (symbols as literalObject<number | undefined>)[
                currentWord.word
            ];
            if (foundId)
                tokens.push({ line, id: foundId, word: currentWord.word });
            break;
    }
}
