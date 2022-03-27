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
});
