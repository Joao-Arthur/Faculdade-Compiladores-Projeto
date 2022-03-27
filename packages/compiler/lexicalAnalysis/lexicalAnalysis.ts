import { addCurrentWordToStack } from './addCurrentWordToStack';
import { currentWord, token } from './types';
import { tryFindCurrentWord } from './tryFindCurrentWord';
import { tryAddCharacterToCurrent } from './tryAddCharacterToCurrent';

export function lexicalAnalysis(sourceCode: string): token[] {
    let tokens: token[] = [];
    let currentWord: currentWord | null = null;

    const iterator = sourceCode[Symbol.iterator]();
    let rawCharacter = iterator.next();

    while (!rawCharacter.done || currentWord) {
        const character = rawCharacter.value?.toLocaleLowerCase();

        if (rawCharacter.done) {
            if (currentWord) {
                if (currentWord.type === 'string') {
                    throw new Error('string não encerrada!');
                }

                if (currentWord.type === 'comment') {
                    throw new Error('comentário não encerrado!');
                }
            }
        }
        if (currentWord) {
            tryAddCharacterToCurrent(currentWord, character);
        } else {
            const found = tryFindCurrentWord(character);
            if (found) currentWord = found;
        }

        if (!currentWord || currentWord?.addedCurrentCharacter)
            rawCharacter = iterator.next();

        if (currentWord?.shouldAdd) {
            addCurrentWordToStack(tokens, currentWord);
            currentWord = null;
        }
    }

    return tokens;
}
