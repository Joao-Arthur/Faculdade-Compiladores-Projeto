import { currentWord, token } from './types';

export interface wordInterpreter {
    matches: (character: string) => boolean;
    create: (character: string) => currentWord;
    handleCharacter: (
        currentWord: currentWord,
        character: string
    ) => currentWord;
    addToStack: (
        tokens: token[],
        currentWord: currentWord,
        line: number
    ) => void;
    onLineEnd: () => void;
    onFileEnd: () => void;
    onBeforePush?: (currentWord: currentWord) => void;
}
