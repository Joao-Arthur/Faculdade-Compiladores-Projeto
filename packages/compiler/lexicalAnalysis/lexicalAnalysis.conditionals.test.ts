import { symbolsId } from '../symbols';
import { lexicalAnalysis } from './lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify array', () => {
        const source = `
program conditionalsprogram;
var
  n1: integer;
  n2: integer;
  n3: integer;
begin
  n1 := 873;
  n2 := 183;
  n3 := 372;
  
  if n1 > 300 then
    n1 := n1 -3
  else if n1 >= 300 then
    n1 := n1 -30
  else if n1 < 400 then
    n1 := n1 -300
  else if n1 <= 400 then
    n1 := n1 -3000;

  if n2 > 300 and n2 < 400 then
    n2 := n2 + 7;
  if n2 >= 300 and n2 <= 400 then
    n2 := n2 + 76;
  if n3 > 300 or n3 < 400 then
    n2 := n2 + 765;
  if n3 >= 300 or n3 <= 400 then
    n2 := n2 + 7654;

  if n1 = n2 or n2 = n3 then
    n3 := - n1 + n2;
  if n1 = n2 and (not (n1 = n3)) then
    n3 := n1 - n2;
  if (not (n2 <> n3)) or n3 <> n1 then
    n3 := - n1 - n2;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { id: symbolsId.program, word: 'program' },
            { id: symbolsId.identificador, word: 'conditionalsprogram' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.var, word: 'var' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[':'], word: ':' },
            { id: symbolsId.integer, word: 'integer' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.begin, word: 'begin' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '873' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '183' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.inteiro, word: '372' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['>'], word: '>' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '3' },
            { id: symbolsId.else, word: 'else' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['>='], word: '>=' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '30' },
            { id: symbolsId.else, word: 'else' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['<'], word: '<' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.else, word: 'else' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['<='], word: '<=' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.inteiro, word: '3000' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['>'], word: '>' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.and, word: 'and' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['<'], word: '<' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '7' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['>='], word: '>=' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.and, word: 'and' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['<='], word: '<=' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '76' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId['>'], word: '>' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.or, word: 'or' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId['<'], word: '<' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '765' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId['>='], word: '>=' },
            { id: symbolsId.inteiro, word: '300' },
            { id: symbolsId.or, word: 'or' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId['<='], word: '<=' },
            { id: symbolsId.inteiro, word: '400' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.inteiro, word: '7654' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId.or, word: 'or' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['+'], word: '+' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId.and, word: 'and' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.not, word: 'not' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['='], word: '=' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.if, word: 'if' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.not, word: 'not' },
            { id: symbolsId['('], word: '(' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId['<>'], word: '<>' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId[')'], word: ')' },
            { id: symbolsId.or, word: 'or' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId['<>'], word: '<>' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId.then, word: 'then' },
            { id: symbolsId.identificador, word: 'n3' },
            { id: symbolsId[':='], word: ':=' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.identificador, word: 'n1' },
            { id: symbolsId['-'], word: '-' },
            { id: symbolsId.identificador, word: 'n2' },
            { id: symbolsId[';'], word: ';' },
            { id: symbolsId.end, word: 'end' },
            { id: symbolsId['.'], word: '.' }
        ]);
    });
});
