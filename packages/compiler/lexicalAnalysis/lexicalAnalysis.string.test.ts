import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify strings', () => {
        const source = `
WriteLn('There"s NO String variables IN THIS language');
`;
        expect(lexicalAnalysis(source)).toEqual([
            { word: 'writeln', id: symbolsId.writeln },
            { word: '(', id: symbolsId['('] },
            {
                word: 'there"s no string variables in this language',
                id: symbolsId.literal
            },
            { word: ')', id: symbolsId[')'] },
            { word: ';', id: symbolsId[';'] }
        ]);
    });
});
