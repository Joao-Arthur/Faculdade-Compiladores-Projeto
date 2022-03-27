import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should ignore comments in the middle of the program', () => {
        const source = `
program CommentsProgram; (*stupid name for a program, after all*)
    (* declaring some integer variables...*)
    var x, y, z: integer;(*another comment*)
begin (*begin*)
    readln(x);(*read line*)
end. (*end*)
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'commentsprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 4, word: 'var', id: symbols.var },
            { line: 4, word: 'x', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'y', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'z', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'begin', id: symbols.begin },
            { line: 6, word: 'readln', id: symbols.readln },
            { line: 6, word: '(', id: symbols['('] },
            { line: 6, word: 'x', id: symbols.identificador },
            { line: 6, word: ')', id: symbols[')'] },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'end', id: symbols.end },
            { line: 7, word: '.', id: symbols['.'] }
        ]);
    });

    it('comments should break tokens', () => {
        const source = `(*comment before start*)
program CommentsProgram;
var
  N, Um, Num: integer(*random comment*);
beg(*breaking comment*)in
  N(*breaking comment*)um :(*breaking comment*)= 19;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'commentsprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'n', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'um', id: symbols.identificador },
            { line: 4, word: ',', id: symbols[','] },
            { line: 4, word: 'num', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'beg', id: symbols.identificador },
            { line: 5, word: 'in', id: symbols.identificador },
            { line: 6, word: 'n', id: symbols.identificador },
            { line: 6, word: 'um', id: symbols.identificador },
            { line: 6, word: ':', id: symbols[':'] },
            { line: 6, word: '=', id: symbols['='] },
            { line: 6, word: '19', id: symbols.inteiro },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'end', id: symbols.end },
            { line: 7, word: '.', id: symbols['.'] }
        ]);
    });

    it('should identify if ends on comment', () => {
        const source = `(*no comments so far*)`;
        expect(lexicalAnalysis(source)).toEqual([]);
    });

    it('should handle multiline comments', () => {
        const source = `(*
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
Ut sem viverra aliquet eget sit amet tellus cras adipiscing.
Ut tristique et egestas quis ipsum suspendisse.
Ultricies integer quis auctor elit sed vulputate mi sit.
Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
Enim ut tellus elementum sagittis vitae et leo duis.
Posuere ac ut consequat semper.
Vitae tempus quam pellentesque nec nam aliquam sem et.
Quis enim lobortis scelerisque fermentum.          
*)`;
        expect(lexicalAnalysis(source)).toEqual([]);
    });

    it('should throw on unfinished comment', () => {
        const source = '(*no comments so far';
        expect(() => lexicalAnalysis(source)).toThrow(
            'comentário não encerrado'
        );
        expect(() => lexicalAnalysis('(*)')).toThrow(
            'comentário não encerrado'
        );
    });
});
