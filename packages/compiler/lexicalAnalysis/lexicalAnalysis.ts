import { currentWord, token } from './types';
import { addCurrentWordToStack } from './addCurrentWordToStack';
import { tryFindCurrentWord } from './tryFindCurrentWord';
import { tryAddCharacterToCurrent } from './tryAddCharacterToCurrent';
import { handleLineEnd } from './handleLineEnd';
import { handleFileEnd } from './handleFileEnd';

export function lexicalAnalysis(sourceCode: string): token[] {
    const lines = sourceCode.split('\n');

    let tokens: token[] = [];
    let currentWord: currentWord | null = null;

    lines.forEach((lineContent, lineIndex) => {
        const iterator = lineContent[Symbol.iterator]();
        let rawCharacter = iterator.next();

        while (!rawCharacter.done || currentWord) {
            const character = rawCharacter.value?.toLocaleLowerCase();
            const isLineEnd = rawCharacter.done;
            const isFileEnd = isLineEnd && lineIndex === lines.length - 1;

            if (currentWord) {
                if (isLineEnd) handleLineEnd(currentWord);
                if (isFileEnd) handleFileEnd(currentWord);

                //change logic to "while (!rawCharacter.done || (currentWord && currentWord.type !== 'comment'))"
                //and yet throw error hard to solve
                if (currentWord.type === 'comment' && isLineEnd && !isFileEnd)
                    break;

                tryAddCharacterToCurrent(currentWord, character);
            } else {
                const found = tryFindCurrentWord(character);
                if (found) {
                    currentWord = found;
                } else {
                    rawCharacter = iterator.next();
                    continue;
                }
            }

            if (currentWord.addedCurrentCharacter)
                rawCharacter = iterator.next();
            if (currentWord.shouldAdd) {
                addCurrentWordToStack(tokens, currentWord, lineIndex + 1);
                currentWord = null;
            }
        }
    });

    return tokens;
}
