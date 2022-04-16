import { findProduction } from './findProduction';

describe('findProduction', () => {
    it('should return the found production', () => {
        expect(findProduction('programa', 'program')).toEqual([
            'program',
            'identificador',
            ';',
            'bloco',
            '.'
        ]);

        expect(findProduction('programa', 'const')).toBe(undefined);

        expect(findProduction('lorem' as any, 'ipsum' as any)).toBe(undefined);
    });
});
