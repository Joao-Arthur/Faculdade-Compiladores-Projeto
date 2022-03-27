import { literalObject } from '../types';
import { symbolsId } from '../symbols';
import { currentWord, token } from './types';

export function addCurrentWordToStack(
    tokens: token[],
    currentWord: currentWord
) {
    switch (currentWord.type) {
        case 'string':
            tokens.push({ id: symbolsId.literal, word: currentWord.word });
            break;
        case 'numeric':
            tokens.push({ id: symbolsId.inteiro, word: currentWord.word });
            break;
        case 'identifier':
            tokens.push({
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
                tokens.push({
                    id: foundId,
                    word: currentWord.word
                });
            break;
    }
}
