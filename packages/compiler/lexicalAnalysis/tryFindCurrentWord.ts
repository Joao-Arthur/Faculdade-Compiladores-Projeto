import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { commentInterpreter } from './interpreters/commentInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { reservedWordInterpreter } from './interpreters/reservedWordInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { wordType } from './types';

export function tryFindCurrentWord(character: string): wordType | undefined {
    if (commentInterpreter.matches(character)) return 'comment';
    if (stringInterpreter.matches(character)) return 'string';
    if (autoMatchInterpreter.matches(character)) return 'autoMatch';
    if (semiAutoMatchInterpreter.matches(character)) return 'semiAutoMatch';
    if (numberInterpreter.matches(character)) return 'numeric';
    if (reservedWordInterpreter.matches(character)) return 'reservedWord';
    if (identifierInterpreter.matches(character)) return 'identifier';
}
