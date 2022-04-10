import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should throw on identifiers larger than 30 character', () => {
        expect(lexicalAnalysis('veryLongNameForAValidVariable')).toEqual([
            {
                line: 1,
                word: 'veryLongNameForAValidVariable',
                id: symbols.identificador
            }
        ]);

        expect(lexicalAnalysis('veryLongNameForAValidVariable')).toEqual([
            {
                line: 1,
                word: 'veeryLongNameForAValidVariable',
                id: symbols.identificador
            }
        ]);

        expect(() =>
            lexicalAnalysis('VeryLongNameButNotValidForAVariable')
        ).toThrow('o tamanho máximo para um identificador é 30 caracteres!');
    });
});
