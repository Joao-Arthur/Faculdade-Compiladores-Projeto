import { reservedWords } from '../symbols';
import { letters, numbers, stringDelimiter } from './constants';
import { currentWord } from './types';

export function tryAddCharacterToCurrent(
    currentWord: currentWord,
    character: string
) {
    switch (currentWord.type) {
        case 'comment':
            currentWord.addedCurrentCharacter = true;
            currentWord.word += character;
            if (currentWord.word.endsWith('*)')) currentWord.shouldAdd = true;
            break;
        case 'string':
            currentWord.addedCurrentCharacter = true;
            if (character === stringDelimiter) {
                currentWord.shouldAdd = true;
            } else {
                currentWord.word += character;
            }
            break;
        case 'semiAutoMatch':
            currentWord.shouldAdd = true;
            currentWord.addedCurrentCharacter = false;
            if (currentWord.word === ':' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '>' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '<' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '<' && character === '>') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '.' && character === '.') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '(' && character === '*') {
                currentWord.word = '';
                currentWord.addedCurrentCharacter = true;
                currentWord.shouldAdd = false;
                currentWord.type = 'comment';
            }
            break;
        case 'identifier':
            if (letters.includes(character) || numbers.includes(character)) {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            } else {
                if (reservedWords.includes(currentWord.word))
                    currentWord.type = 'reservedWord';
                currentWord.shouldAdd = true;
                currentWord.addedCurrentCharacter = false;
            }
            break;
        case 'numeric':
            if (numbers.includes(character)) {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            } else {
                currentWord.shouldAdd = true;
                currentWord.addedCurrentCharacter = false;
            }
            break;
    }
}
