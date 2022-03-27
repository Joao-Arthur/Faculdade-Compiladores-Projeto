import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const numbers = '0123456789' as const;

export const numberInterpreter: wordInterpreter = {
    matches: (character: string) => numbers.includes(character),
    create: (character: string) => ({
        type: 'numeric',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.inteiro,
            word: currentWord.word
        });
    }
};
