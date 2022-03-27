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
        expect(semiAutoMatchInterpreter.create(`<`)).toEqual({
            type: 'semiAutoMatch',
            word: '<',
            shouldAdd: false,
            addedCurrentCharacter: true
        });
    });
});
