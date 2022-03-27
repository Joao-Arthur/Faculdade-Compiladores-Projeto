import { symbols } from '../../symbols';
import { literalObject } from '../../types';
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
    }),
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        const foundId = (symbols as literalObject<number | undefined>)[
            currentWord.word
        ];
        if (foundId) tokens.push({ line, id: foundId, word: currentWord.word });
    }
};
