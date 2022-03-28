import { symbols } from '../../symbols';
import { literalObject } from '../../types';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const autoMatchCharacters = '+-*/[])=,;$' as const;

export const autoMatchInterpreter: wordInterpreter = {
    matches: (character: string) => autoMatchCharacters.includes(character),
    create: (character: string) => ({
        type: 'autoMatch',
        word: character,
        shouldAdd: true,
        addedCurrentCharacter: true
    }),
    handleCharacter: (currentWord: currentWord, character: string) => {
        //implemented only for convention.
        //shall never be called
        return currentWord;
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        const foundId = (symbols as literalObject<number | undefined>)[
            currentWord.word
        ];
        if (foundId) tokens.push({ line, id: foundId, word: currentWord.word });
    },
    onLineEnd: () => {},
    onFileEnd: () => {}
};
