import { currentWord, token } from './types';
import { tryFindCurrentWord } from './tryFindCurrentWord';
import { getInterpreter } from './getInterpreter';

export function lexicalAnalysis(sourceCode: string): token[] {
    const lines = sourceCode.split('\n');

    let tokens: token[] = [];
    let currentWord: currentWord | null = null;

    lines.forEach((lineContent, lineIndex) => {
        const iterator = lineContent[Symbol.iterator]();
        let rawCharacter = iterator.next();

        while (!rawCharacter.done || currentWord) {
            const character = rawCharacter.value;
            const isLineEnd = rawCharacter.done;
            const isFileEnd = isLineEnd && lineIndex === lines.length - 1;

            if (currentWord) {
                const wordInterpreter = getInterpreter(currentWord.type);

                if (isLineEnd) wordInterpreter.onLineEnd?.();
                if (isFileEnd) wordInterpreter.onFileEnd?.(lineIndex + 1);
                if (
                    wordInterpreter.supportsMultiline &&
                    isLineEnd &&
                    !isFileEnd
                )
                    break;

                currentWord = wordInterpreter.handleCharacter(
                    currentWord,
                    character
                );
            } else {
                const foundType = tryFindCurrentWord(character);
                if (foundType) {
                    const wordInterpreter = getInterpreter(foundType);
                    currentWord = wordInterpreter.create(character);
                } else {
                    rawCharacter = iterator.next();
                    continue;
                }
            }

            if (currentWord.addedCurrentCharacter)
                rawCharacter = iterator.next();
            if (currentWord.shouldAdd) {
                const wordInterpreter = getInterpreter(currentWord.type);
                wordInterpreter.onBeforePush?.(currentWord);
                wordInterpreter.addToStack(tokens, currentWord, lineIndex + 1);
                currentWord = null;
            }
        }
    });

    return tokens;
}
