import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const semiAutoMatchCharacters = ':<>.(' as const;

export const semiAutoMatchInterpreter: wordInterpreter = {
    matches: (character: string) => semiAutoMatchCharacters.includes(character),
    create: (character: string) => ({
        type: 'semiAutoMatch',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    })
};
