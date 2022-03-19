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
            { word: 'program', id: symbolsId.program },
            { word: 'conditionalsprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'var', id: symbolsId.var },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'n3', id: symbolsId.identificador },
            { word: ':', id: symbolsId[':'] },
            { word: 'integer', id: symbolsId.integer },
            { word: ';', id: symbolsId[';'] },
            { word: 'begin', id: symbolsId.begin },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '873', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '183', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'n3', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '372', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '>', id: symbolsId['>'] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: '3', id: symbolsId.inteiro },
            { word: 'else', id: symbolsId.else },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '>=', id: symbolsId['>='] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: '30', id: symbolsId.inteiro },
            { word: 'else', id: symbolsId.else },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '<', id: symbolsId['<'] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'else', id: symbolsId.else },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '<=', id: symbolsId['<='] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n1', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: '3000', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n2', id: symbolsId.identificador },
            { word: '>', id: symbolsId['>'] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'and', id: symbolsId.and },
            { word: 'n2', id: symbolsId.identificador },
            { word: '<', id: symbolsId['<'] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: '7', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n2', id: symbolsId.identificador },
            { word: '>=', id: symbolsId['>='] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'and', id: symbolsId.and },
            { word: 'n2', id: symbolsId.identificador },
            { word: '<=', id: symbolsId['<='] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: '76', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n3', id: symbolsId.identificador },
            { word: '>', id: symbolsId['>'] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'or', id: symbolsId.or },
            { word: 'n3', id: symbolsId.identificador },
            { word: '<', id: symbolsId['<'] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: '765', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n3', id: symbolsId.identificador },
            { word: '>=', id: symbolsId['>='] },
            { word: '300', id: symbolsId.inteiro },
            { word: 'or', id: symbolsId.or },
            { word: 'n3', id: symbolsId.identificador },
            { word: '<=', id: symbolsId['<='] },
            { word: '400', id: symbolsId.inteiro },
            { word: 'then', id: symbolsId.then },
            { word: 'n2', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: '7654', id: symbolsId.inteiro },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: 'or', id: symbolsId.or },
            { word: 'n2', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: 'n3', id: symbolsId.identificador },
            { word: 'then', id: symbolsId.then },
            { word: 'n3', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '+', id: symbolsId['+'] },
            { word: 'n2', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: 'n1', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: 'n2', id: symbolsId.identificador },
            { word: 'and', id: symbolsId.and },
            { word: '(', id: symbolsId['('] },
            { word: 'not', id: symbolsId.not },
            { word: '(', id: symbolsId['('] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '=', id: symbolsId['='] },
            { word: 'n3', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ')', id: symbolsId[')'] },
            { word: 'then', id: symbolsId.then },
            { word: 'n3', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: 'n2', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'if', id: symbolsId.if },
            { word: '(', id: symbolsId['('] },
            { word: 'not', id: symbolsId.not },
            { word: '(', id: symbolsId['('] },
            { word: 'n2', id: symbolsId.identificador },
            { word: '<>', id: symbolsId['<>'] },
            { word: 'n3', id: symbolsId.identificador },
            { word: ')', id: symbolsId[')'] },
            { word: ')', id: symbolsId[')'] },
            { word: 'or', id: symbolsId.or },
            { word: 'n3', id: symbolsId.identificador },
            { word: '<>', id: symbolsId['<>'] },
            { word: 'n1', id: symbolsId.identificador },
            { word: 'then', id: symbolsId.then },
            { word: 'n3', id: symbolsId.identificador },
            { word: ':=', id: symbolsId[':='] },
            { word: '-', id: symbolsId['-'] },
            { word: 'n1', id: symbolsId.identificador },
            { word: '-', id: symbolsId['-'] },
            { word: 'n2', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] },
            { word: 'end', id: symbolsId.end },
            { word: '.', id: symbolsId['.'] }
        ]);
    });
});
