import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';
import { UnterminatedCommentException } from './exceptions/UnterminatedCommentException';

const commentStartDelimiter = '(*' as const;
const commentEndDelimiter = '*)' as const;

export const commentInterpreter: wordInterpreter = {
    supportsMultiline: true,
    matches: (character: string) => commentStartDelimiter === character,
    create: (character: string) => ({
        type: 'comment',
        word: '',
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (
        currentWord: currentWord,
        character: string | undefined
    ) => {
        if ((currentWord.word + character).endsWith(commentEndDelimiter))
            return {
                type: 'comment',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        return {
            type: 'comment',
            word: currentWord.word + character,
            addedCurrentCharacter: true,
            shouldAdd: false
        };
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {},
    onFileEnd: (line: number) => {
        throw new UnterminatedCommentException(line);
    }
};
