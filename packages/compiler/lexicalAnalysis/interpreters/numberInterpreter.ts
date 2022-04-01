import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { wordInterpreter } from '../wordInterpreter';

const numbers = '0123456789' as const;
const minValue = -32767;
const maxValue = 32767;

export const numberInterpreter: wordInterpreter = {
    matches: (character: string) => numbers.includes(character),
    create: (character: string) => ({
        type: 'number',
        word: character,
        shouldAdd: false,
        addedCurrentCharacter: true
    }),
    handleCharacter: (currentWord: currentWord, character: string) => {
        if (numbers.includes(character))
            return {
                type: 'number',
                word: currentWord.word + character,
                shouldAdd: false,
                addedCurrentCharacter: true
            };
        return {
            type: 'number',
            word: currentWord.word,
            shouldAdd: true,
            addedCurrentCharacter: false
        };
    },
    addToStack: (tokens: token[], currentWord: currentWord, line: number) => {
        tokens.push({
            line,
            id: symbols.inteiro,
            word: currentWord.word
        });
    },
    onBeforePush: (currentWord: currentWord) => {
        if (Number(currentWord.word) > maxValue)
            throw new Error(`o valor máximo para um número é ${maxValue}!`);
        if (Number(currentWord.word) < minValue)
            throw new Error(`o valor mínimo para um número é ${minValue}!`);
    }
};
