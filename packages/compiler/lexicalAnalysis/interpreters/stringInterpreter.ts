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
    })
};
