import { pipe } from 'ramda';
import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { stringInterpreter } from './stringInterpreter';

describe('stringInterpreter', () => {
    it('should verify if character matches', () => {
        expect(stringInterpreter.matches(`'`)).toBe(true);
        expect(stringInterpreter.matches(`"`)).toBe(false);
        expect(stringInterpreter.matches('`')).toBe(false);
        expect(stringInterpreter.matches('0')).toBe(false);
        expect(stringInterpreter.matches('9')).toBe(false);
        expect(stringInterpreter.matches('a')).toBe(false);
        expect(stringInterpreter.matches('z')).toBe(false);
        expect(stringInterpreter.matches('_')).toBe(false);
        expect(stringInterpreter.matches(`>`)).toBe(false);
        expect(stringInterpreter.matches(`<`)).toBe(false);
        expect(stringInterpreter.matches(':')).toBe(false);
        expect(stringInterpreter.matches('=')).toBe(false);
        expect(stringInterpreter.matches('+')).toBe(false);
        expect(stringInterpreter.matches('-')).toBe(false);
        expect(stringInterpreter.matches('[')).toBe(false);
        expect(stringInterpreter.matches('(')).toBe(false);
        expect(stringInterpreter.matches(';')).toBe(false);
        expect(stringInterpreter.matches('.')).toBe(false);
        expect(stringInterpreter.matches('$')).toBe(false);
    });

    it('should create currentWord', () => {
        expect(stringInterpreter.create(`'`)).toEqual({
            type: 'string',
            word: '',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(
                word => stringInterpreter.handleCharacter(word, 'h'),
                word => stringInterpreter.handleCharacter(word, 'e'),
                word => stringInterpreter.handleCharacter(word, 'l'),
                word => stringInterpreter.handleCharacter(word, 'l'),
                word => stringInterpreter.handleCharacter(word, 'o')
            )(stringInterpreter.create(`'`))
        ).toEqual({
            type: 'string',
            word: 'hello',
            shouldAdd: false,
            addedCurrentCharacter: true
        });

        expect(
            pipe(
                word => stringInterpreter.handleCharacter(word, 'h'),
                word => stringInterpreter.handleCharacter(word, 'e'),
                word => stringInterpreter.handleCharacter(word, 'l'),
                word => stringInterpreter.handleCharacter(word, 'l'),
                word => stringInterpreter.handleCharacter(word, 'o'),
                word => stringInterpreter.handleCharacter(word, `'`)
            )(stringInterpreter.create(`'`))
        ).toEqual({
            type: 'string',
            word: 'hello',
            shouldAdd: true,
            addedCurrentCharacter: true
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'string',
            word: 'hello world!',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        stringInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([
            { line: 10, id: symbols.literal, word: 'hello world!' }
        ]);
    });

    it('should handle line end', () => {
        expect(() => stringInterpreter.onLineEnd?.()).toThrow(
            'string não encerrada!'
        );
    });

    it('should handle file end', () => {
        expect(stringInterpreter.onFileEnd?.()).toEqual(undefined);
    });
});
