import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const stringDelimiter = `'` as const;

export const stringInterpreter: wordInterpreter = {
    matches: (character: string) => stringDelimiter.includes(character),
    create: (character: string) => ({
        type: 'string',
        word: '',
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.literal,
            word: currentWord.word
        });
    }
};
