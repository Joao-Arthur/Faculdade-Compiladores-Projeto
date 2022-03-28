import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { currentWord } from './types';

export function tryAddCharacterToCurrent(
    currentWord: currentWord,
    character: string
) {
    let newWord: currentWord;
    switch (currentWord.type) {
        case 'comment':
            currentWord.addedCurrentCharacter = true;
            currentWord.word += character;
            if (currentWord.word.endsWith('*)')) currentWord.shouldAdd = true;
            break;
        case 'string':
            newWord = stringInterpreter.handleCharacter(currentWord, character);
            currentWord.addedCurrentCharacter = newWord.addedCurrentCharacter;
            currentWord.shouldAdd = newWord.shouldAdd;
            currentWord.type = newWord.type;
            currentWord.word = newWord.word;
            break;
        case 'semiAutoMatch':
            newWord = semiAutoMatchInterpreter.handleCharacter(
                currentWord,
                character
            );
            currentWord.addedCurrentCharacter = newWord.addedCurrentCharacter;
            currentWord.shouldAdd = newWord.shouldAdd;
            currentWord.type = newWord.type;
            currentWord.word = newWord.word;
            break;
        case 'identifier':
            newWord = identifierInterpreter.handleCharacter(
                currentWord,
                character
            );
            currentWord.addedCurrentCharacter = newWord.addedCurrentCharacter;
            currentWord.shouldAdd = newWord.shouldAdd;
            currentWord.type = newWord.type;
            currentWord.word = newWord.word;
            break;
        case 'numeric':
            newWord = numberInterpreter.handleCharacter(currentWord, character);
            currentWord.addedCurrentCharacter = newWord.addedCurrentCharacter;
            currentWord.shouldAdd = newWord.shouldAdd;
            currentWord.type = newWord.type;
            currentWord.word = newWord.word;
            break;
    }
}
