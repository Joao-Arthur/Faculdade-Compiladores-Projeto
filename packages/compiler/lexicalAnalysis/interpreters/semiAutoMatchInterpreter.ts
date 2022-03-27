import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const semiAutoMatchCharacters = ':<>.(' as const;

export const semiAutoMatchInterpreter: wordInterpreter = {
    matches: (character: string) => semiAutoMatchCharacters.includes(character)
};
