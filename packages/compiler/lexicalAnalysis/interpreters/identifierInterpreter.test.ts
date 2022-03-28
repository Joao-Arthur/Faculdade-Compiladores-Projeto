import { pipe } from 'ramda';
import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { identifierInterpreter } from './identifierInterpreter';

describe('identifierInterpreter', () => {
    it('should verify if character matches', () => {
        expect(identifierInterpreter.matches(`'`)).toBe(false);
        expect(identifierInterpreter.matches(`"`)).toBe(false);
        expect(identifierInterpreter.matches('`')).toBe(false);
        expect(identifierInterpreter.matches('0')).toBe(false);
        expect(identifierInterpreter.matches('9')).toBe(false);
        expect(identifierInterpreter.matches('a')).toBe(true);
        expect(identifierInterpreter.matches('z')).toBe(true);
        expect(identifierInterpreter.matches('_')).toBe(true);
        expect(identifierInterpreter.matches(`>`)).toBe(false);
        expect(identifierInterpreter.matches(`<`)).toBe(false);
        expect(identifierInterpreter.matches(':')).toBe(false);
        expect(identifierInterpreter.matches('=')).toBe(false);
        expect(identifierInterpreter.matches('+')).toBe(false);
        expect(identifierInterpreter.matches('-')).toBe(false);
        expect(identifierInterpreter.matches('[')).toBe(false);
        expect(identifierInterpreter.matches('(')).toBe(false);
        expect(identifierInterpreter.matches(';')).toBe(false);
        expect(identifierInterpreter.matches('.')).toBe(false);
        expect(identifierInterpreter.matches('$')).toBe(false);
    });

    it('should create currentWord', () => {
        expect(identifierInterpreter.create(`h`)).toEqual({
            type: 'identifier',
            word: 'h',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });

    it('should add caracter to word', () => {
        expect(
            pipe(
                word => identifierInterpreter.handleCharacter(word, 'u'),
                word => identifierInterpreter.handleCharacter(word, 'm')
            )(identifierInterpreter.create('n'))
        ).toEqual({
            type: 'identifier',
            word: 'num',
            shouldAdd: false,
            addedCurrentCharacter: true
        });

        expect(
            pipe(
                word => identifierInterpreter.handleCharacter(word, 'u'),
                word => identifierInterpreter.handleCharacter(word, 'm'),
                word => identifierInterpreter.handleCharacter(word, ';')
            )(identifierInterpreter.create('n'))
        ).toEqual({
            type: 'identifier',
            word: 'num',
            shouldAdd: true,
            addedCurrentCharacter: false
        });

        expect(
            pipe(
                word => identifierInterpreter.handleCharacter(word, 'f'),

                word => identifierInterpreter.handleCharacter(word, ';')
            )(identifierInterpreter.create('i'))
        ).toEqual({
            type: 'reservedWord',
            word: 'if',
            shouldAdd: true,
            addedCurrentCharacter: false
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'identifier',
            word: 'hello_world',
            shouldAdd: true,
            addedCurrentCharacter: false
        };
        identifierInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([
            { line: 10, id: symbols.identificador, word: 'hello_world' }
        ]);
    });

    it('should handle line end', () => {
        expect(identifierInterpreter.onLineEnd()).toEqual(undefined);
    });

    it('should handle file end', () => {
        expect(identifierInterpreter.onFileEnd()).toEqual(undefined);
    });
});
