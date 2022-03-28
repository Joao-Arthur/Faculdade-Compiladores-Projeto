import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { commentInterpreter } from './interpreters/commentInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { reservedWordInterpreter } from './interpreters/reservedWordInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { currentWord } from './types';

export function handleLineEnd(currentWord: currentWord) {
    switch (currentWord.type) {
        case 'autoMatch':
            autoMatchInterpreter.onLineEnd();
            break;
        case 'comment':
            commentInterpreter.onLineEnd();
            break;
        case 'identifier':
            identifierInterpreter.onLineEnd();
            break;
        case 'numeric':
            numberInterpreter.onLineEnd();
            break;
        case 'reservedWord':
            reservedWordInterpreter.onLineEnd();
            break;
        case 'semiAutoMatch':
            semiAutoMatchInterpreter.onLineEnd();
            break;
        case 'string':
            stringInterpreter.onLineEnd();
            break;
    }
}
