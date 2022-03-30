import { pipe } from 'ramda';
import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { semiAutoMatchInterpreter } from './semiAutoMatchInterpreter';

describe('semiAutoMatchInterpreter', () => {
    it('should verify if character matches', () => {
        expect(semiAutoMatchInterpreter.matches(`'`)).toBe(false);
        expect(semiAutoMatchInterpreter.matches(`"`)).toBe(false);
        expect(semiAutoMatchInterpreter.matches('`')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('0')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('9')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('a')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('z')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('_')).toBe(false);
        expect(semiAutoMatchInterpreter.matches(`>`)).toBe(true);
        expect(semiAutoMatchInterpreter.matches(`<`)).toBe(true);
        expect(semiAutoMatchInterpreter.matches(':')).toBe(true);
        expect(semiAutoMatchInterpreter.matches('=')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('+')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('-')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('[')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('(')).toBe(true);
        expect(semiAutoMatchInterpreter.matches(';')).toBe(false);
        expect(semiAutoMatchInterpreter.matches('.')).toBe(true);
        expect(semiAutoMatchInterpreter.matches('$')).toBe(false);
    });

    it('should create currentWord', () => {
        expect(semiAutoMatchInterpreter.create('<')).toEqual({
            type: 'semiAutoMatch',
            word: '<',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create('>')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '>',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '='))(
                semiAutoMatchInterpreter.create('>')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '>=',
            shouldAdd: true,
            addedCurrentCharacter: true
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create(':')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: ':',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '='))(
                semiAutoMatchInterpreter.create(`:`)
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: ':=',
            shouldAdd: true,
            addedCurrentCharacter: true
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create('<')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '<',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '='))(
                semiAutoMatchInterpreter.create('<')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '<=',
            shouldAdd: true,
            addedCurrentCharacter: true
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create('<')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '<',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '>'))(
                semiAutoMatchInterpreter.create('<')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '<>',
            shouldAdd: true,
            addedCurrentCharacter: true
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create('.')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '.',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '.'))(
                semiAutoMatchInterpreter.create('.')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '..',
            shouldAdd: true,
            addedCurrentCharacter: true
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, ' '))(
                semiAutoMatchInterpreter.create('(')
            )
        ).toEqual({
            type: 'semiAutoMatch',
            word: '(',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(word => semiAutoMatchInterpreter.handleCharacter(word, '*'))(
                semiAutoMatchInterpreter.create('(')
            )
        ).toEqual({
            type: 'comment',
            word: '',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'semiAutoMatch',
            word: '<=',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        semiAutoMatchInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([{ line: 10, id: symbols['<='], word: '<=' }]);
    });

    it('should handle line end', () => {
        expect(semiAutoMatchInterpreter.onLineEnd?.()).toEqual(undefined);
    });

    it('should handle file end', () => {
        expect(semiAutoMatchInterpreter.onFileEnd?.()).toEqual(undefined);
    });
});
