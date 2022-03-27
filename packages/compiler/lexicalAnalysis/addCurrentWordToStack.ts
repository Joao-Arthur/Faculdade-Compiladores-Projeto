import { literalObject } from '../types';
import { symbols } from '../symbols';
import { currentWord, token } from './types';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';

export function addCurrentWordToStack(
    tokens: token[],
    currentWord: currentWord,
    line: number
) {
    switch (currentWord.type) {
        case 'string':
            stringInterpreter.addToStack(tokens, currentWord, line);
            break;
        case 'numeric':
            numberInterpreter.addToStack(tokens, currentWord, line);
            break;
        case 'identifier':
            identifierInterpreter.addToStack(tokens, currentWord, line);
            break;
        case 'autoMatch':
            autoMatchInterpreter.addToStack(tokens, currentWord, line);
            break;
        case 'semiAutoMatch':
            semiAutoMatchInterpreter.addToStack(tokens, currentWord, line);
            break;
        case 'reservedWord':
            const foundId = (symbols as literalObject<number | undefined>)[
                currentWord.word
            ];
            if (foundId)
                tokens.push({ line, id: foundId, word: currentWord.word });
            break;
    }
}
