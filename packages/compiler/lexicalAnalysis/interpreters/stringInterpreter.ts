import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const stringDelimiter = `'` as const;

export const stringInterpreter: wordInterpreter = {
    matches: (character: string) => stringDelimiter === character,
    create: (character: string) => ({
        type: 'string',
        word: '',
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (currentWord: currentWord, character: string) => {
        if (stringDelimiter.includes(character))
            return {
                type: 'string',
                word: currentWord.word,
                shouldAdd: true,
                addedCurrentCharacter: true
            };
        return {
            type: 'string',
            word: currentWord.word + character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.literal,
            word: currentWord.word
        });
    },
    onLineEnd: () => {
        throw new Error('string não encerrada!');
    },
    onBeforePush: (currentWord: currentWord) => {}
};
