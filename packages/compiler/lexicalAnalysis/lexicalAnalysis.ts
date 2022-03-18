import { symbols } from '../symbols';
import { numbers } from '../numbers';
import { letters } from '../letters';

type lexicalTokens = {
    id: number;
    word: string;
};

export function lexicalAnalysis(sourceCode: string): lexicalTokens[] {
    let tokens: lexicalTokens[] = [];
    let i = 0;

    let current: {
        type: 'numeric' | 'identifier' | 'comment' | 'string';
        symbol: string;
    } | null = null;


    /*

    existe os seguintes grupos de itens a serem considerados

comentários
strings
-> dentro deles, tudo é ignorado
-> se chegar no final e não tiver fechamento??

depois, tem símbolos, que quando encontrados, dão match automaticamente
(, ), >=, > (cuidado, nesse caso tem que verificar o seguinte :( ), ponto,virgula.

então, tem números, começa e termina com números, se tiver um dígito, aí dá erro, eu acho

depois tem keywords, que só dão match na hora de adiciona à lista
senão, é um identificador comum

todo o resto é ignorado

*/

    for (i = 0; i < sourceCode.length; i++) {
        const character = sourceCode[i].toLocaleLowerCase();

        if (current) {
            if (current.type === 'numeric')
                if (numbers.includes(character)) {
                    current.symbol += character;
                } else {
                    //error?
                }
            if (current.type === 'identifier') {
                if (
                    letters.includes(character) ||
                    numbers.includes(character)
                ) {
                    current.symbol += character;
                } else {
                    if()
                }
            }
        } else {
            if (letters.includes(character))
                current = { type: 'identifier', symbol: character };
            if (numbers.includes(character))
                current = { type: 'numeric', symbol: character };
        }
    }
    return tokens;
}
