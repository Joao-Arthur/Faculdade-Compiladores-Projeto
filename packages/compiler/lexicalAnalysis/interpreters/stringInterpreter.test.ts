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
});
