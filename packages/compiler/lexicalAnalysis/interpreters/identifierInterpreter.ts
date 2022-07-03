import { symbols } from '../../symbols';
import { reservedWords } from '../../reservedWords';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';
import { IdentifierMaxLengthExceededException } from './exceptions/IdentifierMaxLengthExceededException';

const identifierCharacters = 'abcdefghijklmnopqrstuvwxyz_' as const;
const numbers = '0123456789' as const;
const maxLength = 30;

export const identifierInterpreter: wordInterpreter = {
    matches: (character: string) =>
        identifierCharacters.includes(character.toLocaleLowerCase()),
    create: (character: string) => ({
        type: 'identifier',
        word: character.toLocaleLowerCase(),
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (
        currentWord: currentWord,
        character: string | undefined
    ) => {
        if (
            (character &&
                identifierCharacters.includes(character.toLocaleLowerCase())) ||
            (character && numbers.includes(character))
        )
            return {
                type: 'identifier',
                word: currentWord.word + character.toLocaleLowerCase(),
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
    },
    onBeforePush: (currentWord: currentWord) => {
        if (currentWord.word.length > maxLength)
            throw new IdentifierMaxLengthExceededException(maxLength);
    }
};
