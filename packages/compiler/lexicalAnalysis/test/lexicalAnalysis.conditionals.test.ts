import { symbolsId } from '../../symbols';
import { lexicalAnalysis } from '../lexicalAnalysis';

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
            { line: 2, word: 'program', id: symbolsId.program },
            {
                line: 2,
                word: 'conditionalsprogram',
                id: symbolsId.identificador
            },
            { line: 2, word: ';', id: symbolsId[';'] },
            { line: 3, word: 'var', id: symbolsId.var },
            { line: 4, word: 'n1', id: symbolsId.identificador },
            { line: 4, word: ':', id: symbolsId[':'] },
            { line: 4, word: 'integer', id: symbolsId.integer },
            { line: 4, word: ';', id: symbolsId[';'] },
            { line: 5, word: 'n2', id: symbolsId.identificador },
            { line: 5, word: ':', id: symbolsId[':'] },
            { line: 5, word: 'integer', id: symbolsId.integer },
            { line: 5, word: ';', id: symbolsId[';'] },
            { line: 6, word: 'n3', id: symbolsId.identificador },
            { line: 6, word: ':', id: symbolsId[':'] },
            { line: 6, word: 'integer', id: symbolsId.integer },
            { line: 6, word: ';', id: symbolsId[';'] },
            { line: 7, word: 'begin', id: symbolsId.begin },
            { line: 8, word: 'n1', id: symbolsId.identificador },
            { line: 8, word: ':=', id: symbolsId[':='] },
            { line: 8, word: '873', id: symbolsId.inteiro },
            { line: 8, word: ';', id: symbolsId[';'] },
            { line: 9, word: 'n2', id: symbolsId.identificador },
            { line: 9, word: ':=', id: symbolsId[':='] },
            { line: 9, word: '183', id: symbolsId.inteiro },
            { line: 9, word: ';', id: symbolsId[';'] },
            { line: 10, word: 'n3', id: symbolsId.identificador },
            { line: 10, word: ':=', id: symbolsId[':='] },
            { line: 10, word: '372', id: symbolsId.inteiro },
            { line: 10, word: ';', id: symbolsId[';'] },
            { line: 13, word: 'if', id: symbolsId.if },
            { line: 13, word: 'n1', id: symbolsId.identificador },
            { line: 13, word: '>', id: symbolsId['>'] },
            { line: 13, word: '300', id: symbolsId.inteiro },
            { line: 13, word: 'then', id: symbolsId.then },
            { line: 14, word: 'n1', id: symbolsId.identificador },
            { line: 14, word: ':=', id: symbolsId[':='] },
            { line: 14, word: 'n1', id: symbolsId.identificador },
            { line: 14, word: '-', id: symbolsId['-'] },
            { line: 14, word: '3', id: symbolsId.inteiro },
            { line: 15, word: 'else', id: symbolsId.else },
            { line: 15, word: 'if', id: symbolsId.if },
            { line: 15, word: 'n1', id: symbolsId.identificador },
            { line: 15, word: '>=', id: symbolsId['>='] },
            { line: 15, word: '300', id: symbolsId.inteiro },
            { line: 15, word: 'then', id: symbolsId.then },
            { line: 16, word: 'n1', id: symbolsId.identificador },
            { line: 16, word: ':=', id: symbolsId[':='] },
            { line: 16, word: 'n1', id: symbolsId.identificador },
            { line: 16, word: '-', id: symbolsId['-'] },
            { line: 16, word: '30', id: symbolsId.inteiro },
            { line: 17, word: 'else', id: symbolsId.else },
            { line: 17, word: 'if', id: symbolsId.if },
            { line: 17, word: 'n1', id: symbolsId.identificador },
            { line: 17, word: '<', id: symbolsId['<'] },
            { line: 17, word: '400', id: symbolsId.inteiro },
            { line: 17, word: 'then', id: symbolsId.then },
            { line: 18, word: 'n1', id: symbolsId.identificador },
            { line: 18, word: ':=', id: symbolsId[':='] },
            { line: 18, word: 'n1', id: symbolsId.identificador },
            { line: 18, word: '-', id: symbolsId['-'] },
            { line: 18, word: '300', id: symbolsId.inteiro },
            { line: 19, word: 'else', id: symbolsId.else },
            { line: 19, word: 'if', id: symbolsId.if },
            { line: 19, word: 'n1', id: symbolsId.identificador },
            { line: 19, word: '<=', id: symbolsId['<='] },
            { line: 19, word: '400', id: symbolsId.inteiro },
            { line: 19, word: 'then', id: symbolsId.then },
            { line: 20, word: 'n1', id: symbolsId.identificador },
            { line: 20, word: ':=', id: symbolsId[':='] },
            { line: 20, word: 'n1', id: symbolsId.identificador },
            { line: 20, word: '-', id: symbolsId['-'] },
            { line: 20, word: '3000', id: symbolsId.inteiro },
            { line: 20, word: ';', id: symbolsId[';'] },
            { line: 23, word: 'if', id: symbolsId.if },
            { line: 23, word: 'n2', id: symbolsId.identificador },
            { line: 23, word: '>', id: symbolsId['>'] },
            { line: 23, word: '300', id: symbolsId.inteiro },
            { line: 23, word: 'and', id: symbolsId.and },
            { line: 23, word: 'n2', id: symbolsId.identificador },
            { line: 23, word: '<', id: symbolsId['<'] },
            { line: 23, word: '400', id: symbolsId.inteiro },
            { line: 23, word: 'then', id: symbolsId.then },
            { line: 24, word: 'n2', id: symbolsId.identificador },
            { line: 24, word: ':=', id: symbolsId[':='] },
            { line: 24, word: 'n2', id: symbolsId.identificador },
            { line: 24, word: '+', id: symbolsId['+'] },
            { line: 24, word: '7', id: symbolsId.inteiro },
            { line: 24, word: ';', id: symbolsId[';'] },
            { line: 25, word: 'if', id: symbolsId.if },
            { line: 25, word: 'n2', id: symbolsId.identificador },
            { line: 25, word: '>=', id: symbolsId['>='] },
            { line: 25, word: '300', id: symbolsId.inteiro },
            { line: 25, word: 'and', id: symbolsId.and },
            { line: 25, word: 'n2', id: symbolsId.identificador },
            { line: 25, word: '<=', id: symbolsId['<='] },
            { line: 25, word: '400', id: symbolsId.inteiro },
            { line: 25, word: 'then', id: symbolsId.then },
            { line: 26, word: 'n2', id: symbolsId.identificador },
            { line: 26, word: ':=', id: symbolsId[':='] },
            { line: 26, word: 'n2', id: symbolsId.identificador },
            { line: 26, word: '+', id: symbolsId['+'] },
            { line: 26, word: '76', id: symbolsId.inteiro },
            { line: 26, word: ';', id: symbolsId[';'] },
            { line: 27, word: 'if', id: symbolsId.if },
            { line: 27, word: 'n3', id: symbolsId.identificador },
            { line: 27, word: '>', id: symbolsId['>'] },
            { line: 27, word: '300', id: symbolsId.inteiro },
            { line: 27, word: 'or', id: symbolsId.or },
            { line: 27, word: 'n3', id: symbolsId.identificador },
            { line: 27, word: '<', id: symbolsId['<'] },
            { line: 27, word: '400', id: symbolsId.inteiro },
            { line: 27, word: 'then', id: symbolsId.then },
            { line: 28, word: 'n2', id: symbolsId.identificador },
            { line: 28, word: ':=', id: symbolsId[':='] },
            { line: 28, word: 'n2', id: symbolsId.identificador },
            { line: 28, word: '+', id: symbolsId['+'] },
            { line: 28, word: '765', id: symbolsId.inteiro },
            { line: 28, word: ';', id: symbolsId[';'] },
            { line: 29, word: 'if', id: symbolsId.if },
            { line: 29, word: 'n3', id: symbolsId.identificador },
            { line: 29, word: '>=', id: symbolsId['>='] },
            { line: 29, word: '300', id: symbolsId.inteiro },
            { line: 29, word: 'or', id: symbolsId.or },
            { line: 29, word: 'n3', id: symbolsId.identificador },
            { line: 29, word: '<=', id: symbolsId['<='] },
            { line: 29, word: '400', id: symbolsId.inteiro },
            { line: 29, word: 'then', id: symbolsId.then },
            { line: 30, word: 'n2', id: symbolsId.identificador },
            { line: 30, word: ':=', id: symbolsId[':='] },
            { line: 30, word: 'n2', id: symbolsId.identificador },
            { line: 30, word: '+', id: symbolsId['+'] },
            { line: 30, word: '7654', id: symbolsId.inteiro },
            { line: 30, word: ';', id: symbolsId[';'] },
            { line: 33, word: 'if', id: symbolsId.if },
            { line: 33, word: 'n1', id: symbolsId.identificador },
            { line: 33, word: '=', id: symbolsId['='] },
            { line: 33, word: 'n2', id: symbolsId.identificador },
            { line: 33, word: 'or', id: symbolsId.or },
            { line: 33, word: 'n2', id: symbolsId.identificador },
            { line: 33, word: '=', id: symbolsId['='] },
            { line: 33, word: 'n3', id: symbolsId.identificador },
            { line: 33, word: 'then', id: symbolsId.then },
            { line: 34, word: 'n3', id: symbolsId.identificador },
            { line: 34, word: ':=', id: symbolsId[':='] },
            { line: 34, word: '-', id: symbolsId['-'] },
            { line: 34, word: 'n1', id: symbolsId.identificador },
            { line: 34, word: '+', id: symbolsId['+'] },
            { line: 34, word: 'n2', id: symbolsId.identificador },
            { line: 34, word: ';', id: symbolsId[';'] },
            { line: 35, word: 'if', id: symbolsId.if },
            { line: 35, word: 'n1', id: symbolsId.identificador },
            { line: 35, word: '=', id: symbolsId['='] },
            { line: 35, word: 'n2', id: symbolsId.identificador },
            { line: 35, word: 'and', id: symbolsId.and },
            { line: 35, word: '(', id: symbolsId['('] },
            { line: 35, word: 'not', id: symbolsId.not },
            { line: 35, word: '(', id: symbolsId['('] },
            { line: 35, word: 'n1', id: symbolsId.identificador },
            { line: 35, word: '=', id: symbolsId['='] },
            { line: 35, word: 'n3', id: symbolsId.identificador },
            { line: 35, word: ')', id: symbolsId[')'] },
            { line: 35, word: ')', id: symbolsId[')'] },
            { line: 35, word: 'then', id: symbolsId.then },
            { line: 36, word: 'n3', id: symbolsId.identificador },
            { line: 36, word: ':=', id: symbolsId[':='] },
            { line: 36, word: 'n1', id: symbolsId.identificador },
            { line: 36, word: '-', id: symbolsId['-'] },
            { line: 36, word: 'n2', id: symbolsId.identificador },
            { line: 36, word: ';', id: symbolsId[';'] },
            { line: 37, word: 'if', id: symbolsId.if },
            { line: 37, word: '(', id: symbolsId['('] },
            { line: 37, word: 'not', id: symbolsId.not },
            { line: 37, word: '(', id: symbolsId['('] },
            { line: 37, word: 'n2', id: symbolsId.identificador },
            { line: 37, word: '<>', id: symbolsId['<>'] },
            { line: 37, word: 'n3', id: symbolsId.identificador },
            { line: 37, word: ')', id: symbolsId[')'] },
            { line: 37, word: ')', id: symbolsId[')'] },
            { line: 37, word: 'or', id: symbolsId.or },
            { line: 37, word: 'n3', id: symbolsId.identificador },
            { line: 37, word: '<>', id: symbolsId['<>'] },
            { line: 37, word: 'n1', id: symbolsId.identificador },
            { line: 37, word: 'then', id: symbolsId.then },
            { line: 38, word: 'n3', id: symbolsId.identificador },
            { line: 38, word: ':=', id: symbolsId[':='] },
            { line: 38, word: '-', id: symbolsId['-'] },
            { line: 38, word: 'n1', id: symbolsId.identificador },
            { line: 38, word: '-', id: symbolsId['-'] },
            { line: 38, word: 'n2', id: symbolsId.identificador },
            { line: 38, word: ';', id: symbolsId[';'] },
            { line: 39, word: 'end', id: symbolsId.end },
            { line: 39, word: '.', id: symbolsId['.'] }
        ]);
    });
});
