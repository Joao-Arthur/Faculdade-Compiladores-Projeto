import { symbolsValue } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify empty program', () => {
        expect(lexicalAnalysis('')).toEqual([]);
    });

    it('should separate numbers and letters', () => {
        expect(lexicalAnalysis('My1stV4r := 764VY;')).toEqual([
            { id: symbolsValue.identificador, word: 'my1stv4r' },
            { id: symbolsValue[':='], word: ':=' },
            { id: symbolsValue.inteiro, word: '764' },
            { id: symbolsValue.identificador, word: 'vy' },
            { id: symbolsValue[';'], word: ';' }
        ]);
    });

    it('should identify simple program', () => {
        const source = `
program test123;
    var x, y, z: integer;
begin
    readln(x);
end;
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsValue.program, word: 'program' },
            { id: symbolsValue.identificador, word: 'test123' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.var, word: 'var' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[','], word: ',' },
            { id: symbolsValue.identificador, word: 'y' },
            { id: symbolsValue[','], word: ',' },
            { id: symbolsValue.identificador, word: 'z' },
            { id: symbolsValue[':'], word: ':' },
            { id: symbolsValue.integer, word: 'integer' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.begin, word: 'begin' },
            { id: symbolsValue.readln, word: 'readln' },
            { id: symbolsValue['('], word: '(' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[')'], word: ')' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.end, word: 'end' },
            { id: symbolsValue[';'], word: ';' }
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
            { id: symbolsValue.program, word: 'program' },
            { id: symbolsValue.identificador, word: 'testcase' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.var, word: 'var' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[':'], word: ':' },
            { id: symbolsValue.integer, word: 'integer' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.begin, word: 'begin' },
            { id: symbolsValue.readln, word: 'readln' },
            { id: symbolsValue['('], word: '(' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[')'], word: ')' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.end, word: 'end' },
            { id: symbolsValue[';'], word: ';' }
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
            { id: symbolsValue.program, word: 'program' },
            { id: symbolsValue.identificador, word: 'programwithcomments' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.var, word: 'var' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[','], word: ',' },
            { id: symbolsValue.identificador, word: 'y' },
            { id: symbolsValue[','], word: ',' },
            { id: symbolsValue.identificador, word: 'z' },
            { id: symbolsValue[':'], word: ':' },
            { id: symbolsValue.integer, word: 'integer' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.begin, word: 'begin' },
            { id: symbolsValue.readln, word: 'readln' },
            { id: symbolsValue['('], word: '(' },
            { id: symbolsValue.identificador, word: 'x' },
            { id: symbolsValue[')'], word: ')' },
            { id: symbolsValue[';'], word: ';' },
            { id: symbolsValue.end, word: 'end' },
            { id: symbolsValue[';'], word: ';' }
        ]);
    });*/

    /* it('should handle non ending comments?', () => { });*/

    /*it('should identify strings', () => {
        const source = `
WriteLn('there"s no string variables in this language');
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: 21, word: 'writeln' },
            { id: symbolsValue['('], word: '(' },
            { id: 48, word: 'there"s no string variables in this language' },
            { id: symbolsValue[')'], word: ')' },
            { id: symbolsValue[';'], word: ';' }
        ]);
    });*/

    /* it('should handle non ending strings?', () => { });*/
});
