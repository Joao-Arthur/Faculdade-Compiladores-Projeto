import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify empty program', () => {
        expect(lexicalAnalysis('')).toEqual([]);
    });

    it('should separate numbers and letters', () => {
        expect(lexicalAnalysis('My1stV4r := 764VY;')).toEqual([
            { id: symbolsId.identificador, word: 'my1stv4r' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '764' },
            { id: symbolsId.identificador, word: 'vy' },
            { id: symbolsId[';'], word: ';' }
        ]);
    });

    it('should identify simple program', () => {
        const source = `
program test123;
    var x, y, z: integer;
begin
    readln(x);
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'test123' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.identificador, word: 'y' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.identificador, word: 'z' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });

    it('should ignore case', () => {
        const source = `
PROGRAM TESTCASE;
    VAR X: INTEGER;
BEGIN
    READLN(X);
END;
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'testcase' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' }
        ]);
    });

    /*it('should ignore comments', () => {
        const source = `
program programWithComments;
    (* declaring some integer variables...*)
    var x, y, z: integer;(*another comment*)
begin (*begin*)
    readln(x);(*read line*)
end; (*end*)
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'programwithcomments' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.identificador, word: 'y' },
            { id: symbolsId[','], word: ',' },
            { id: symbolsId.identificador, word: 'z' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.readln, word: 'readln' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'x' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId[';'], word: ';' }
        ]);
    });*/

    /* it('should handle non ending comments?', () => { });*/

    /*it('should identify strings', () => {
        const source = `
WriteLn('there"s no string variables in this language');
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: 21, word: 'writeln' },
            { id: symbolsId['('], word: '(' },
            { id: 48, word: 'there"s no string variables in this language' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[';'], word: ';' }
        ]);
    });*/

    /* it('should handle non ending strings?', () => { });*/
});
