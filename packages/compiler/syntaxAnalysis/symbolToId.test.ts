import { symbolToId } from './symbolToId';

describe('symbolToId', () => {
    it('should identify to which set does symbol belong', () => {
        expect(symbolToId('procedure')).toBe(5);
        expect(symbolToId('programa')).toBe(52);
        expect(symbolToId(undefined as any)).toBe(undefined);
    });
});
