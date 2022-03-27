import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const identifierCharacters = 'abcdefghijklmnopqrstuvwxyz_' as const;

export const identifierInterpreter: wordInterpreter = {
    matches: (character: string) => identifierCharacters.includes(character)
};
