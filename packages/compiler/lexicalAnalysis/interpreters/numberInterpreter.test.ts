import { pipe } from 'ramda';
import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { numberInterpreter } from './numberInterpreter';

describe('numberInterpreter', () => {
    it('should verify if character matches', () => {
        expect(numberInterpreter.matches(`'`)).toBe(false);
        expect(numberInterpreter.matches(`"`)).toBe(false);
        expect(numberInterpreter.matches('`')).toBe(false);
        expect(numberInterpreter.matches('0')).toBe(true);
        expect(numberInterpreter.matches('9')).toBe(true);
        expect(numberInterpreter.matches('a')).toBe(false);
        expect(numberInterpreter.matches('z')).toBe(false);
        expect(numberInterpreter.matches('_')).toBe(false);
        expect(numberInterpreter.matches(`>`)).toBe(false);
        expect(numberInterpreter.matches(`<`)).toBe(false);
        expect(numberInterpreter.matches(':')).toBe(false);
        expect(numberInterpreter.matches('=')).toBe(false);
        expect(numberInterpreter.matches('+')).toBe(false);
        expect(numberInterpreter.matches('-')).toBe(false);
        expect(numberInterpreter.matches('[')).toBe(false);
        expect(numberInterpreter.matches('(')).toBe(false);
        expect(numberInterpreter.matches(';')).toBe(false);
        expect(numberInterpreter.matches('.')).toBe(false);
        expect(numberInterpreter.matches('$')).toBe(false);
    });

    it('should create currentWord', () => {
        expect(numberInterpreter.create(`6`)).toEqual({
            type: 'numeric',
            word: '6',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(
                word => numberInterpreter.handleCharacter(word, '6'),
                word => numberInterpreter.handleCharacter(word, '6')
            )(numberInterpreter.create(`6`))
        ).toEqual({
            type: 'numeric',
            word: '666',
            shouldAdd: false,
            addedCurrentCharacter: true
        });

        expect(
            pipe(
                word => numberInterpreter.handleCharacter(word, '6'),
                word => numberInterpreter.handleCharacter(word, '6'),
                word => numberInterpreter.handleCharacter(word, ';')
            )(numberInterpreter.create(`6`))
        ).toEqual({
            type: 'numeric',
            word: '666',
            shouldAdd: true,
            addedCurrentCharacter: false
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'numeric',
            word: '56709',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        numberInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([
            { line: 10, id: symbols.inteiro, word: '56709' }
        ]);
    });
});
