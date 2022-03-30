import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { commentInterpreter } from './interpreters/commentInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { reservedWordInterpreter } from './interpreters/reservedWordInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { wordType } from './types';
import { wordInterpreter } from './wordInterpreter';

export function getInterpreter(wordType: wordType): wordInterpreter {
    switch (wordType) {
        case 'comment':
            return commentInterpreter;
        case 'string':
            return stringInterpreter;
        case 'autoMatch':
            return autoMatchInterpreter;
        case 'semiAutoMatch':
            return semiAutoMatchInterpreter;
        case 'number':
            return numberInterpreter;
        case 'reservedWord':
            return reservedWordInterpreter;
        case 'identifier':
            return identifierInterpreter;
    }
}
