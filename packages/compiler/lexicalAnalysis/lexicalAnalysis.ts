import { currentWord, token } from './types';
import { addCurrentWordToStack } from './addCurrentWordToStack';
import { tryFindCurrentWord } from './tryFindCurrentWord';
import { tryAddCharacterToCurrent } from './tryAddCharacterToCurrent';

export function lexicalAnalysis(sourceCode: string): token[] {
    const lines = sourceCode.split('\n');

    let tokens: token[] = [];
    let currentWord: currentWord | null = null;

    lines.forEach((lineContent, lineIndex) => {
        const iterator = lineContent[Symbol.iterator]();
        let rawCharacter = iterator.next();

        while (!rawCharacter.done || currentWord) {
            const character = rawCharacter.value?.toLocaleLowerCase();

            if (rawCharacter.done) {
                if (currentWord) {
                    if (currentWord.type === 'string') {
                        throw new Error('string não encerrada!');
                    }

                    if (currentWord.type === 'comment') {
                        if (lineIndex === lines.length - 1) {
                            throw new Error('comentário não encerrado!');
                        } else break;
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
                addCurrentWordToStack(tokens, currentWord, lineIndex + 1);
                currentWord = null;
            }
        }
    });

    return tokens;
}
