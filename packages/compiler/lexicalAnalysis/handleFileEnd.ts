import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { commentInterpreter } from './interpreters/commentInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { reservedWordInterpreter } from './interpreters/reservedWordInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { currentWord } from './types';

export function handleFileEnd(currentWord: currentWord) {
    switch (currentWord.type) {
        case 'autoMatch':
            autoMatchInterpreter.onFileEnd();
            break;
        case 'comment':
            commentInterpreter.onFileEnd();
            break;
        case 'identifier':
            identifierInterpreter.onFileEnd();
            break;
        case 'numeric':
            numberInterpreter.onFileEnd();
            break;
        case 'reservedWord':
            reservedWordInterpreter.onFileEnd();
            break;
        case 'semiAutoMatch':
            semiAutoMatchInterpreter.onFileEnd();
            break;
        case 'string':
            stringInterpreter.onFileEnd();
            break;
    }
}
