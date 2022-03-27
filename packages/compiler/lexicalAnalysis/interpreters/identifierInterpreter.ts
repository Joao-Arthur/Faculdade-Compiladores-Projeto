import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const identifierCharacters = 'abcdefghijklmnopqrstuvwxyz_' as const;

export const identifierInterpreter: wordInterpreter = {
    matches: (character: string) => identifierCharacters.includes(character),
    create: (character: string) => ({
        type: 'identifier',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    })
};
