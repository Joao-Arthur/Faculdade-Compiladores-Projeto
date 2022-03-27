import { symbols } from '../../symbols';
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
    }),
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.identificador,
            word: currentWord.word
        });
    }
};
