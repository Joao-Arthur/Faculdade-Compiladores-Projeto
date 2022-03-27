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
});
