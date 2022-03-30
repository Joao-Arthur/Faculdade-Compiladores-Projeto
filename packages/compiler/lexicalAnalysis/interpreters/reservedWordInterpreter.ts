import { reservedWords, symbols } from '../../symbols';
import { literalObject } from '../../types';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

export const reservedWordInterpreter: wordInterpreter = {
    matches: (character: string) => reservedWords.includes(character),
    create: (character: string) => ({
        type: 'reservedWord',
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
    onBeforePush: (currentWord: currentWord) => {}
};
