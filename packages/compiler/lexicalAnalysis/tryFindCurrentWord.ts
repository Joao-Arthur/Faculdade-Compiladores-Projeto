import {
    autoMatchSymbols,
    letters,
    numbers,
    semiAutoMatchSymbols,
    stringDelimiter
} from './constants';
import { currentWord } from './types';

export function tryFindCurrentWord(character: string): currentWord | undefined {
    if (autoMatchSymbols.includes(character))
        return {
            type: 'autoMatch',
            word: character,
            shouldAdd: true,
            addedCurrentCharacter: true
        };
    if (semiAutoMatchSymbols.includes(character))
        return {
            type: 'semiAutoMatch',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (letters.includes(character))
        return {
            type: 'identifier',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (numbers.includes(character))
        return {
            type: 'numeric',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (stringDelimiter === character)
        return {
            type: 'string',
            word: '',
            shouldAdd: false,
            addedCurrentCharacter: true
        };
}
