import { currentWord, token } from './types';

export type wordInterpreter = {
    supportsMultiline?: boolean;
    matches: (character: string) => boolean;
    create: (character: string) => currentWord;
    handleCharacter: (
        currentWord: currentWord,
        character: string | undefined
    ) => currentWord;
    addToStack: (
        tokens: token[],
        currentWord: currentWord,
        line: number
    ) => void;
    onLineEnd?: () => void;
    onFileEnd?: (line: number) => void;
    onBeforePush?: (currentWord: currentWord) => void;
};
