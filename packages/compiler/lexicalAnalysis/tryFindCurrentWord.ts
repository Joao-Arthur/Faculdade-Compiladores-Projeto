import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { currentWord } from './types';

export function tryFindCurrentWord(character: string): currentWord | undefined {
    if (autoMatchInterpreter.matches(character))
        return {
            type: 'autoMatch',
            word: character,
            shouldAdd: true,
            addedCurrentCharacter: true
        };
    if (semiAutoMatchInterpreter.matches(character))
        return {
            type: 'semiAutoMatch',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (identifierInterpreter.matches(character))
        return {
            type: 'identifier',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (numberInterpreter.matches(character))
        return {
            type: 'numeric',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (stringInterpreter.matches(character))
        return {
            type: 'string',
            word: '',
            shouldAdd: false,
            addedCurrentCharacter: true
        };
}
