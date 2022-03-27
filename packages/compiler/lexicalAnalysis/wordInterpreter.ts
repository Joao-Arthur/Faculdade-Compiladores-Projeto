import { currentWord, token } from './types';

export interface wordInterpreter {
    matches: (character: string) => boolean;
    create?: (character: string) => currentWord;
    handleCharacter?: (
        currentWord: currentWord,
        character: string
    ) => currentWord;
    addToStack?: (
        tokens: token[],
        currentWord: currentWord,
        line: number
    ) => void;
    onLineEnd?: (currentWord: currentWord) => void;
    onFileEnd?: (currentWord: currentWord) => void;
    onBeforePush?: (currentWord: currentWord) => void;
}
