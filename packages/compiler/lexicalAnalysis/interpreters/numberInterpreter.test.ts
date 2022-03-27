import { numberInterpreter } from './numberInterpreter';

describe('numberInterpreter', () => {
    it('should verify if character matches', () => {
        expect(numberInterpreter.matches(`'`)).toBe(false);
        expect(numberInterpreter.matches(`"`)).toBe(false);
        expect(numberInterpreter.matches('`')).toBe(false);
        expect(numberInterpreter.matches('0')).toBe(true);
        expect(numberInterpreter.matches('9')).toBe(true);
        expect(numberInterpreter.matches('a')).toBe(false);
        expect(numberInterpreter.matches('z')).toBe(false);
        expect(numberInterpreter.matches('_')).toBe(false);
        expect(numberInterpreter.matches(`>`)).toBe(false);
        expect(numberInterpreter.matches(`<`)).toBe(false);
        expect(numberInterpreter.matches(':')).toBe(false);
        expect(numberInterpreter.matches('=')).toBe(false);
        expect(numberInterpreter.matches('+')).toBe(false);
        expect(numberInterpreter.matches('-')).toBe(false);
        expect(numberInterpreter.matches('[')).toBe(false);
        expect(numberInterpreter.matches('(')).toBe(false);
        expect(numberInterpreter.matches(';')).toBe(false);
        expect(numberInterpreter.matches('.')).toBe(false);
        expect(numberInterpreter.matches('$')).toBe(false);
    });
});
