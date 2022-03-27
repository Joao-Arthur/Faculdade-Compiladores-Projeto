import { literalObject } from '../types';
import { symbolsId } from '../symbols';
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
                id: symbolsId.literal,
                word: currentWord.word
            });
            break;
        case 'numeric':
            tokens.push({
                line,
                id: symbolsId.inteiro,
                word: currentWord.word
            });
            break;
        case 'identifier':
            tokens.push({
                line,
                id: symbolsId.identificador,
                word: currentWord.word
            });
            break;
        case 'autoMatch':
        case 'semiAutoMatch':
        case 'reservedWord':
            const foundId = (symbolsId as literalObject<number | undefined>)[
                currentWord.word
            ];
            if (foundId)
                tokens.push({ line, id: foundId, word: currentWord.word });
            break;
    }
}
