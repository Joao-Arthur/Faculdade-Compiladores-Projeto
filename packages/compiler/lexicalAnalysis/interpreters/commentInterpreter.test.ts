import { pipe } from 'ramda';
import { currentWord, token } from '../types';
import { commentInterpreter } from './commentInterpreter';
import { UnterminatedCommentException } from './exceptions/UnterminatedCommentException';

describe('commentInterpreter', () => {
    it('should verify if character matches', () => {
        expect(commentInterpreter.matches(`'`)).toBe(false);
        expect(commentInterpreter.matches(`"`)).toBe(false);
        expect(commentInterpreter.matches('`')).toBe(false);
        expect(commentInterpreter.matches('0')).toBe(false);
        expect(commentInterpreter.matches('9')).toBe(false);
        expect(commentInterpreter.matches('a')).toBe(false);
        expect(commentInterpreter.matches('z')).toBe(false);
        expect(commentInterpreter.matches('_')).toBe(false);
        expect(commentInterpreter.matches(`>`)).toBe(false);
        expect(commentInterpreter.matches(`<`)).toBe(false);
        expect(commentInterpreter.matches(':')).toBe(false);
        expect(commentInterpreter.matches('=')).toBe(false);
        expect(commentInterpreter.matches('+')).toBe(false);
        expect(commentInterpreter.matches('-')).toBe(false);
        expect(commentInterpreter.matches('[')).toBe(false);
        expect(commentInterpreter.matches('(')).toBe(false);
        expect(commentInterpreter.matches(';')).toBe(false);
        expect(commentInterpreter.matches('.')).toBe(false);
        expect(commentInterpreter.matches('$')).toBe(false);
    });

    it('should create currentWord', () => {
        expect(commentInterpreter.create('(*')).toEqual({
            type: 'comment',
            word: '',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(
                word => commentInterpreter.handleCharacter(word, 'h'),
                word => commentInterpreter.handleCharacter(word, 'i')
            )(commentInterpreter.create('(*'))
        ).toEqual({
            type: 'comment',
            word: 'hi',
            shouldAdd: false,
            addedCurrentCharacter: true
        });

        expect(
            pipe(
                word => commentInterpreter.handleCharacter(word, 'h'),
                word => commentInterpreter.handleCharacter(word, 'i'),
                word => commentInterpreter.handleCharacter(word, '*'),
                word => commentInterpreter.handleCharacter(word, ')')
            )(commentInterpreter.create('(*'))
        ).toEqual({
            type: 'comment',
            word: 'hi*)',
            shouldAdd: true,
            addedCurrentCharacter: true
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'comment',
            word: 'who wrote this garbage?*)',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        commentInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([]);
    });

    it('should handle line end', () => {
        expect(commentInterpreter.onLineEnd?.()).toEqual(undefined);
    });

    it('should handle file end', () => {
        expect(() => commentInterpreter.onFileEnd?.(10)).toThrow(UnterminatedCommentException);
    });
});
