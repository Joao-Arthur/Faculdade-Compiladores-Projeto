import { symbols } from '../../symbols';
import { literalObject } from '../../types';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const semiAutoMatchCharacters = ':<>.(+-' as const;
const numbers = '0123456789' as const;

export const semiAutoMatchInterpreter: wordInterpreter = {
    matches: (character: string) => semiAutoMatchCharacters.includes(character),
    create: (character: string) => ({
        type: 'semiAutoMatch',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (
        currentWord: currentWord,
        character: string | undefined
    ) => {
        currentWord.shouldAdd = true;
        currentWord.addedCurrentCharacter = false;
        if (currentWord.word === ':' && character === '=') {
            return {
                type: 'semiAutoMatch',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        }
        if (currentWord.word === '>' && character === '=') {
            return {
                type: 'semiAutoMatch',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        }
        if (currentWord.word === '<' && character === '=') {
            return {
                type: 'semiAutoMatch',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        }
        if (currentWord.word === '<' && character === '>') {
            return {
                type: 'semiAutoMatch',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        }
        if (currentWord.word === '.' && character === '.') {
            return {
                type: 'semiAutoMatch',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: true
            };
        }
        if (currentWord.word === '(' && character === '*') {
            return {
                type: 'comment',
                word: '',
                addedCurrentCharacter: true,
                shouldAdd: false
            };
        }
        if (
            currentWord.word === '+' &&
            character &&
            numbers.includes(character)
        ) {
            return {
                type: 'number',
                word: character,
                addedCurrentCharacter: true,
                shouldAdd: false
            };
        }
        if (
            currentWord.word === '-' &&
            character &&
            numbers.includes(character)
        ) {
            return {
                type: 'number',
                word: currentWord.word + character,
                addedCurrentCharacter: true,
                shouldAdd: false
            };
        }
        return {
            type: 'semiAutoMatch',
            word: currentWord.word,
            shouldAdd: true,
            addedCurrentCharacter: false
        };
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        const foundId = (symbols as literalObject<number | undefined>)[
            currentWord.word
        ];
        if (foundId) tokens.push({ line, id: foundId, word: currentWord.word });
    }
};
