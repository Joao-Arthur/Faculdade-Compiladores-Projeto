import { symbols } from '../../symbols';
import { currentWord, token } from '../types';
import { autoMatchInterpreter } from './autoMatchInterpreter';

describe('autoMatchInterpreter', () => {
    it('should verify if character matches', () => {
        expect(autoMatchInterpreter.matches(`'`)).toBe(false);
        expect(autoMatchInterpreter.matches(`"`)).toBe(false);
        expect(autoMatchInterpreter.matches('`')).toBe(false);
        expect(autoMatchInterpreter.matches('0')).toBe(false);
        expect(autoMatchInterpreter.matches('9')).toBe(false);
        expect(autoMatchInterpreter.matches('a')).toBe(false);
        expect(autoMatchInterpreter.matches('z')).toBe(false);
        expect(autoMatchInterpreter.matches('_')).toBe(false);
        expect(autoMatchInterpreter.matches(`>`)).toBe(false);
        expect(autoMatchInterpreter.matches(`<`)).toBe(false);
        expect(autoMatchInterpreter.matches(':')).toBe(false);
        expect(autoMatchInterpreter.matches('=')).toBe(true);
        expect(autoMatchInterpreter.matches('+')).toBe(true);
        expect(autoMatchInterpreter.matches('-')).toBe(true);
        expect(autoMatchInterpreter.matches('[')).toBe(true);
        expect(autoMatchInterpreter.matches('(')).toBe(false);
        expect(autoMatchInterpreter.matches(';')).toBe(true);
        expect(autoMatchInterpreter.matches('.')).toBe(false);
        expect(autoMatchInterpreter.matches('$')).toBe(true);
    });

    it('should create currentWord', () => {
        expect(autoMatchInterpreter.create('[')).toEqual({
            type: 'autoMatch',
            word: '[',
            shouldAdd: true,
            addedCurrentCharacter: true
        });
    });

    it('should add to stack', () => {
        let tokens: token[] = [];
        const currentWord: currentWord = {
            type: 'autoMatch',
            word: '[',
            shouldAdd: true,
            addedCurrentCharacter: true
        };
        autoMatchInterpreter.addToStack(tokens, currentWord, 10);
        expect(tokens).toEqual([{ line: 10, id: symbols['['], word: '[' }]);
    });
});
