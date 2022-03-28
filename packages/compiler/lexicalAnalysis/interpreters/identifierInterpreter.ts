import { reservedWords, symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const identifierCharacters = 'abcdefghijklmnopqrstuvwxyz_' as const;
const numbers = '0123456789' as const;

export const identifierInterpreter: wordInterpreter = {
    matches: (character: string) => identifierCharacters.includes(character),
    create: (character: string) => ({
        type: 'identifier',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (currentWord: currentWord, character: string) => {
        if (
            identifierCharacters.includes(character) ||
            numbers.includes(character)
        )
            return {
                type: 'identifier',
                word: currentWord.word + character,
                shouldAdd: false,
                addedCurrentCharacter: true
            };
        return {
            type: reservedWords.includes(currentWord.word)
                ? 'reservedWord'
                : 'identifier',
            word: currentWord.word,
            shouldAdd: true,
            addedCurrentCharacter: false
        };
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.identificador,
            word: currentWord.word
        });
    }
};
