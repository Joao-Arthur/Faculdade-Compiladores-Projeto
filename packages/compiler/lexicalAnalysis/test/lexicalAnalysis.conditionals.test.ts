import { symbols } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

describe('lexicalAnalysis', () => {
    it('should identify if, else and conditions', () => {
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
  
  (*test else if expressions*)
  if n1 > 300 then
    n1 := n1 -3
  else if n1 >= 300 then
    n1 := n1 -30
  else if n1 < 400 then
    n1 := n1 -300
  else if n1 <= 400 then
    n1 := n1 -3000;

  (*test greater and smaller expressions*)
  if n2 > 300 and n2 < 400 then
    n2 := n2 + 7;
  if n2 >= 300 and n2 <= 400 then
    n2 := n2 + 76;
  if n3 > 300 or n3 < 400 then
    n2 := n2 + 765;
  if n3 >= 300 or n3 <= 400 then
    n2 := n2 + 7654;

  (*test and or expressions*)
  if n1 = n2 or n2 = n3 then
    n3 := - n1 + n2;
  if n1 = n2 and (not (n1 = n3)) then
    n3 := n1 - n2;
  if (not (n2 <> n3)) or n3 <> n1 then
    n3 := - n1 - n2;
end.
`;
        expect(lexicalAnalysis(source)).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            {
                line: 2,
                word: 'conditionalsprogram',
                id: symbols.identificador
            },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'var', id: symbols.var },
            { line: 4, word: 'n1', id: symbols.identificador },
            { line: 4, word: ':', id: symbols[':'] },
            { line: 4, word: 'integer', id: symbols.integer },
            { line: 4, word: ';', id: symbols[';'] },
            { line: 5, word: 'n2', id: symbols.identificador },
            { line: 5, word: ':', id: symbols[':'] },
            { line: 5, word: 'integer', id: symbols.integer },
            { line: 5, word: ';', id: symbols[';'] },
            { line: 6, word: 'n3', id: symbols.identificador },
            { line: 6, word: ':', id: symbols[':'] },
            { line: 6, word: 'integer', id: symbols.integer },
            { line: 6, word: ';', id: symbols[';'] },
            { line: 7, word: 'begin', id: symbols.begin },
            { line: 8, word: 'n1', id: symbols.identificador },
            { line: 8, word: ':=', id: symbols[':='] },
            { line: 8, word: '873', id: symbols.inteiro },
            { line: 8, word: ';', id: symbols[';'] },
            { line: 9, word: 'n2', id: symbols.identificador },
            { line: 9, word: ':=', id: symbols[':='] },
            { line: 9, word: '183', id: symbols.inteiro },
            { line: 9, word: ';', id: symbols[';'] },
            { line: 10, word: 'n3', id: symbols.identificador },
            { line: 10, word: ':=', id: symbols[':='] },
            { line: 10, word: '372', id: symbols.inteiro },
            { line: 10, word: ';', id: symbols[';'] },
            { line: 13, word: 'if', id: symbols.if },
            { line: 13, word: 'n1', id: symbols.identificador },
            { line: 13, word: '>', id: symbols['>'] },
            { line: 13, word: '300', id: symbols.inteiro },
            { line: 13, word: 'then', id: symbols.then },
            { line: 14, word: 'n1', id: symbols.identificador },
            { line: 14, word: ':=', id: symbols[':='] },
            { line: 14, word: 'n1', id: symbols.identificador },
            { line: 14, word: '-', id: symbols['-'] },
            { line: 14, word: '3', id: symbols.inteiro },
            { line: 15, word: 'else', id: symbols.else },
            { line: 15, word: 'if', id: symbols.if },
            { line: 15, word: 'n1', id: symbols.identificador },
            { line: 15, word: '>=', id: symbols['>='] },
            { line: 15, word: '300', id: symbols.inteiro },
            { line: 15, word: 'then', id: symbols.then },
            { line: 16, word: 'n1', id: symbols.identificador },
            { line: 16, word: ':=', id: symbols[':='] },
            { line: 16, word: 'n1', id: symbols.identificador },
            { line: 16, word: '-', id: symbols['-'] },
            { line: 16, word: '30', id: symbols.inteiro },
            { line: 17, word: 'else', id: symbols.else },
            { line: 17, word: 'if', id: symbols.if },
            { line: 17, word: 'n1', id: symbols.identificador },
            { line: 17, word: '<', id: symbols['<'] },
            { line: 17, word: '400', id: symbols.inteiro },
            { line: 17, word: 'then', id: symbols.then },
            { line: 18, word: 'n1', id: symbols.identificador },
            { line: 18, word: ':=', id: symbols[':='] },
            { line: 18, word: 'n1', id: symbols.identificador },
            { line: 18, word: '-', id: symbols['-'] },
            { line: 18, word: '300', id: symbols.inteiro },
            { line: 19, word: 'else', id: symbols.else },
            { line: 19, word: 'if', id: symbols.if },
            { line: 19, word: 'n1', id: symbols.identificador },
            { line: 19, word: '<=', id: symbols['<='] },
            { line: 19, word: '400', id: symbols.inteiro },
            { line: 19, word: 'then', id: symbols.then },
            { line: 20, word: 'n1', id: symbols.identificador },
            { line: 20, word: ':=', id: symbols[':='] },
            { line: 20, word: 'n1', id: symbols.identificador },
            { line: 20, word: '-', id: symbols['-'] },
            { line: 20, word: '3000', id: symbols.inteiro },
            { line: 20, word: ';', id: symbols[';'] },
            { line: 23, word: 'if', id: symbols.if },
            { line: 23, word: 'n2', id: symbols.identificador },
            { line: 23, word: '>', id: symbols['>'] },
            { line: 23, word: '300', id: symbols.inteiro },
            { line: 23, word: 'and', id: symbols.and },
            { line: 23, word: 'n2', id: symbols.identificador },
            { line: 23, word: '<', id: symbols['<'] },
            { line: 23, word: '400', id: symbols.inteiro },
            { line: 23, word: 'then', id: symbols.then },
            { line: 24, word: 'n2', id: symbols.identificador },
            { line: 24, word: ':=', id: symbols[':='] },
            { line: 24, word: 'n2', id: symbols.identificador },
            { line: 24, word: '+', id: symbols['+'] },
            { line: 24, word: '7', id: symbols.inteiro },
            { line: 24, word: ';', id: symbols[';'] },
            { line: 25, word: 'if', id: symbols.if },
            { line: 25, word: 'n2', id: symbols.identificador },
            { line: 25, word: '>=', id: symbols['>='] },
            { line: 25, word: '300', id: symbols.inteiro },
            { line: 25, word: 'and', id: symbols.and },
            { line: 25, word: 'n2', id: symbols.identificador },
            { line: 25, word: '<=', id: symbols['<='] },
            { line: 25, word: '400', id: symbols.inteiro },
            { line: 25, word: 'then', id: symbols.then },
            { line: 26, word: 'n2', id: symbols.identificador },
            { line: 26, word: ':=', id: symbols[':='] },
            { line: 26, word: 'n2', id: symbols.identificador },
            { line: 26, word: '+', id: symbols['+'] },
            { line: 26, word: '76', id: symbols.inteiro },
            { line: 26, word: ';', id: symbols[';'] },
            { line: 27, word: 'if', id: symbols.if },
            { line: 27, word: 'n3', id: symbols.identificador },
            { line: 27, word: '>', id: symbols['>'] },
            { line: 27, word: '300', id: symbols.inteiro },
            { line: 27, word: 'or', id: symbols.or },
            { line: 27, word: 'n3', id: symbols.identificador },
            { line: 27, word: '<', id: symbols['<'] },
            { line: 27, word: '400', id: symbols.inteiro },
            { line: 27, word: 'then', id: symbols.then },
            { line: 28, word: 'n2', id: symbols.identificador },
            { line: 28, word: ':=', id: symbols[':='] },
            { line: 28, word: 'n2', id: symbols.identificador },
            { line: 28, word: '+', id: symbols['+'] },
            { line: 28, word: '765', id: symbols.inteiro },
            { line: 28, word: ';', id: symbols[';'] },
            { line: 29, word: 'if', id: symbols.if },
            { line: 29, word: 'n3', id: symbols.identificador },
            { line: 29, word: '>=', id: symbols['>='] },
            { line: 29, word: '300', id: symbols.inteiro },
            { line: 29, word: 'or', id: symbols.or },
            { line: 29, word: 'n3', id: symbols.identificador },
            { line: 29, word: '<=', id: symbols['<='] },
            { line: 29, word: '400', id: symbols.inteiro },
            { line: 29, word: 'then', id: symbols.then },
            { line: 30, word: 'n2', id: symbols.identificador },
            { line: 30, word: ':=', id: symbols[':='] },
            { line: 30, word: 'n2', id: symbols.identificador },
            { line: 30, word: '+', id: symbols['+'] },
            { line: 30, word: '7654', id: symbols.inteiro },
            { line: 30, word: ';', id: symbols[';'] },
            { line: 33, word: 'if', id: symbols.if },
            { line: 33, word: 'n1', id: symbols.identificador },
            { line: 33, word: '=', id: symbols['='] },
            { line: 33, word: 'n2', id: symbols.identificador },
            { line: 33, word: 'or', id: symbols.or },
            { line: 33, word: 'n2', id: symbols.identificador },
            { line: 33, word: '=', id: symbols['='] },
            { line: 33, word: 'n3', id: symbols.identificador },
            { line: 33, word: 'then', id: symbols.then },
            { line: 34, word: 'n3', id: symbols.identificador },
            { line: 34, word: ':=', id: symbols[':='] },
            { line: 34, word: '-', id: symbols['-'] },
            { line: 34, word: 'n1', id: symbols.identificador },
            { line: 34, word: '+', id: symbols['+'] },
            { line: 34, word: 'n2', id: symbols.identificador },
            { line: 34, word: ';', id: symbols[';'] },
            { line: 35, word: 'if', id: symbols.if },
            { line: 35, word: 'n1', id: symbols.identificador },
            { line: 35, word: '=', id: symbols['='] },
            { line: 35, word: 'n2', id: symbols.identificador },
            { line: 35, word: 'and', id: symbols.and },
            { line: 35, word: '(', id: symbols['('] },
            { line: 35, word: 'not', id: symbols.not },
            { line: 35, word: '(', id: symbols['('] },
            { line: 35, word: 'n1', id: symbols.identificador },
            { line: 35, word: '=', id: symbols['='] },
            { line: 35, word: 'n3', id: symbols.identificador },
            { line: 35, word: ')', id: symbols[')'] },
            { line: 35, word: ')', id: symbols[')'] },
            { line: 35, word: 'then', id: symbols.then },
            { line: 36, word: 'n3', id: symbols.identificador },
            { line: 36, word: ':=', id: symbols[':='] },
            { line: 36, word: 'n1', id: symbols.identificador },
            { line: 36, word: '-', id: symbols['-'] },
            { line: 36, word: 'n2', id: symbols.identificador },
            { line: 36, word: ';', id: symbols[';'] },
            { line: 37, word: 'if', id: symbols.if },
            { line: 37, word: '(', id: symbols['('] },
            { line: 37, word: 'not', id: symbols.not },
            { line: 37, word: '(', id: symbols['('] },
            { line: 37, word: 'n2', id: symbols.identificador },
            { line: 37, word: '<>', id: symbols['<>'] },
            { line: 37, word: 'n3', id: symbols.identificador },
            { line: 37, word: ')', id: symbols[')'] },
            { line: 37, word: ')', id: symbols[')'] },
            { line: 37, word: 'or', id: symbols.or },
            { line: 37, word: 'n3', id: symbols.identificador },
            { line: 37, word: '<>', id: symbols['<>'] },
            { line: 37, word: 'n1', id: symbols.identificador },
            { line: 37, word: 'then', id: symbols.then },
            { line: 38, word: 'n3', id: symbols.identificador },
            { line: 38, word: ':=', id: symbols[':='] },
            { line: 38, word: '-', id: symbols['-'] },
            { line: 38, word: 'n1', id: symbols.identificador },
            { line: 38, word: '-', id: symbols['-'] },
            { line: 38, word: 'n2', id: symbols.identificador },
            { line: 38, word: ';', id: symbols[';'] },
            { line: 39, word: 'end', id: symbols.end },
            { line: 39, word: '.', id: symbols['.'] }
        ]);
    });
});
