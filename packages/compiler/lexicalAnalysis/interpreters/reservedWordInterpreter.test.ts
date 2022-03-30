import { pipe } from 'ramda';
import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { reservedWordInterpreter } from './reservedWordInterpreter';

describe('reservedWordInterpreter', () => {
    it('should verify if character matches', () => {
        expect(reservedWordInterpreter.matches(`'`)).toBe(false);
        expect(reservedWordInterpreter.matches(`"`)).toBe(false);
        expect(reservedWordInterpreter.matches('`')).toBe(false);
        expect(reservedWordInterpreter.matches('0')).toBe(false);
        expect(reservedWordInterpreter.matches('9')).toBe(false);
        expect(reservedWordInterpreter.matches('a')).toBe(false);
        expect(reservedWordInterpreter.matches('z')).toBe(false);
        expect(reservedWordInterpreter.matches('_')).toBe(false);
        expect(reservedWordInterpreter.matches(`>`)).toBe(false);
        expect(reservedWordInterpreter.matches(`<`)).toBe(false);
        expect(reservedWordInterpreter.matches(':')).toBe(false);
        expect(reservedWordInterpreter.matches('=')).toBe(false);
        expect(reservedWordInterpreter.matches('+')).toBe(false);
        expect(reservedWordInterpreter.matches('-')).toBe(false);
        expect(reservedWordInterpreter.matches('[')).toBe(false);
        expect(reservedWordInterpreter.matches('(')).toBe(false);
        expect(reservedWordInterpreter.matches(';')).toBe(false);
        expect(reservedWordInterpreter.matches('.')).toBe(false);
        expect(reservedWordInterpreter.matches('$')).toBe(false);
        expect(reservedWordInterpreter.matches('if')).toBe(true);
        expect(reservedWordInterpreter.matches('else')).toBe(true);
        expect(reservedWordInterpreter.matches('case')).toBe(true);
        expect(reservedWordInterpreter.matches('integer')).toBe(true);
    });

    it('should create currentWord', () => {
        expect(reservedWordInterpreter.create('array')).toEqual({
            type: 'reservedWord',
            word: 'array',
            shouldAdd: true,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(
                word => reservedWordInterpreter.handleCharacter(word, 'readln'),
                word => reservedWordInterpreter.handleCharacter(word, 'writeln')
            )(reservedWordInterpreter.create('if'))
        ).toEqual({
            type: 'reservedWord',
            word: 'if',
            shouldAdd: true,
            addedCurrentCharacter: true
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'reservedWord',
            word: 'repeat',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        reservedWordInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([
            { line: 10, id: symbols.repeat, word: 'repeat' }
        ]);
    });

    it('should handle line end', () => {
        expect(reservedWordInterpreter.onLineEnd?.()).toEqual(undefined);
    });

    it('should handle file end', () => {
        expect(reservedWordInterpreter.onFileEnd?.()).toEqual(undefined);
    });
});
