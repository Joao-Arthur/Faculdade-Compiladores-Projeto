import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const autoMatchCharacters = '+-*/[])=,;$' as const;

export const autoMatchInterpreter: wordInterpreter = {
    matches: (character: string) => autoMatchCharacters.includes(character)
};
