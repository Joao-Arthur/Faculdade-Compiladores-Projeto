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

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'identifier',
            word: 'hello_world',
            shouldAdd: false,
            addedCurrentCharacter: true
        };
        identifierInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([
            { line: 10, id: symbols.identificador, word: 'hello_world' }
        ]);
    });
});
