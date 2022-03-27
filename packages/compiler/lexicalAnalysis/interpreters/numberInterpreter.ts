import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const numbers = '0123456789' as const;

export const numberInterpreter: wordInterpreter = {
    matches: (character: string) => numbers.includes(character)
};
