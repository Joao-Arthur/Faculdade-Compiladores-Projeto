import { autoMatchInterpreter } from './interpreters/autoMatchInterpreter';
import { identifierInterpreter } from './interpreters/identifierInterpreter';
import { numberInterpreter } from './interpreters/numberInterpreter';
import { semiAutoMatchInterpreter } from './interpreters/semiAutoMatchInterpreter';
import { stringInterpreter } from './interpreters/stringInterpreter';
import { currentWord } from './types';

export function tryFindCurrentWord(character: string): currentWord | undefined {
    if (autoMatchInterpreter.matches(character))
        return autoMatchInterpreter.create(character);

    if (semiAutoMatchInterpreter.matches(character))
        return semiAutoMatchInterpreter.create(character);

    if (identifierInterpreter.matches(character))
        return identifierInterpreter.create(character);

    if (numberInterpreter.matches(character))
        return numberInterpreter.create(character);

    if (stringInterpreter.matches(character))
        return stringInterpreter.create(character);
}
