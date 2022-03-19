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



//verificar se faz sentido
 -> ao final do bloco, adicionar o current à pilha de acordo com uma flag
*/

import { symbolItem, symbols } from '../symbols';
import {
    autoMatchSymbols,
    letters,
    numbers,
    semiAutoMatchSymbols
} from './constants';

type lexicalTokens = {
    id: number;
    word: string;
};

type autoMatchCharacters =
    | '+'
    | '-'
    | '*'
    | '/'
    | '['
    | ']'
    | '('
    | ')'
    | '='
    | ','
    | ';'
    | '$';

type wordType =
    | 'string'
    | 'autoMatch'
    | 'semiAutoMatch'
    | 'numeric'
    | 'reservedWord'
    | 'identifier';

type currentWord = {
    type: wordType;
    word: string;
    shouldAdd: boolean;
} | null;

let tokens: lexicalTokens[] = [];

export function lexicalAnalysis(sourceCode: string): lexicalTokens[] {
    let currentWord: currentWord = null;

    const iterator = sourceCode[Symbol.iterator]();
    let rawCharacter = iterator.next();

    while (!rawCharacter.done) {
        const character = rawCharacter.value.toLocaleLowerCase();

        if (currentWord) {
            switch (currentWord.type) {
                case 'semiAutoMatch':
                    currentWord.shouldAdd = true;
                    if (currentWord.word === ':' && character === '=')
                        currentWord.word += character;
                    if (currentWord.word === '>' && character === '=')
                        currentWord.word += character;
                    if (currentWord.word === '<' && character === '=')
                        currentWord.word += character;
                    if (currentWord.word === '<' && character === '>')
                        currentWord.word += character;
                    if (currentWord.word === '.' && character === '.')
                        currentWord.word += character;
                    break;
                case 'identifier':
                    if (
                        letters.includes(character) ||
                        numbers.includes(character)
                    ) {
                        currentWord.word += character;
                    } else {
                        if (
                            symbols.some(
                                symbol => symbol.symbol === currentWord?.word
                            )
                        )
                            currentWord.type = 'reservedWord';
                        currentWord.shouldAdd = true;
                    }
                    break;
                case 'numeric':
                    if (numbers.includes(character)) {
                        currentWord.word += character;
                    } else {
                        currentWord.shouldAdd = true;
                    }
                    break;
            }
        } else {
            if (autoMatchSymbols.includes(character)) {
                currentWord = {
                    type: 'autoMatch',
                    word: character,
                    shouldAdd: true
                };
            } else if (semiAutoMatchSymbols.includes(character)) {
                currentWord = {
                    type: 'semiAutoMatch',
                    word: character,
                    shouldAdd: false
                };
            } else if (letters.includes(character)) {
                currentWord = {
                    type: 'identifier',
                    word: character,
                    shouldAdd: false
                };
            } else if (numbers.includes(character)) {
                currentWord = {
                    type: 'numeric',
                    word: character,
                    shouldAdd: false
                };
            }
        }

        addCurrentWordToStack(currentWord);
        if (currentWord?.shouldAdd) {
            if (currentWord.type === 'autoMatch' && currentWord.word)
                if (!autoMatchSymbols.includes(character))
                    rawCharacter = iterator.next();
            currentWord = null;
        } else {
            rawCharacter = iterator.next();
        }
    }

    return tokens;
}

function addCurrentWordToStack(currentWord: currentWord) {
    if (!currentWord) return;
    if (!currentWord.shouldAdd) return;

    switch (currentWord.type) {
        case 'string':
            tokens.push({ id: 48, word: currentWord.word });
            break;
        case 'numeric':
            tokens.push({ id: 26, word: currentWord.word });
            break;
        case 'identifier':
            tokens.push({ id: 25, word: currentWord.word });
            break;
        case 'autoMatch':
        case 'semiAutoMatch':
        case 'reservedWord':
            const foundSymbol = symbols.find(
                symbol => symbol.symbol === currentWord.word
            );
            if (foundSymbol)
                tokens.push({
                    id: foundSymbol.id,
                    word: foundSymbol.symbol
                });
            break;
    }
}
