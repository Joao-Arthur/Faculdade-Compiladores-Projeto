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
    addedCurrentCharacter: boolean;
};

/*
 - comentários
 - strings
-> dentro deles, tudo é ignorado
-> se chegar no final e não tiver fechar a string??
*/

export function lexicalAnalysis(sourceCode: string): lexicalTokens[] {
    let tokens: lexicalTokens[] = [];
    let currentWord: currentWord | null = null;

    const iterator = sourceCode[Symbol.iterator]();
    let rawCharacter = iterator.next();

    while (!rawCharacter.done) {
        const character = rawCharacter.value.toLocaleLowerCase();

        if (currentWord) {
            tryAddCharacterToCurrent(currentWord, character);
        } else {
            const found = tryFindCurrentWord(character);
            if (found) currentWord = found;
        }

        if (!currentWord || currentWord?.addedCurrentCharacter)
            rawCharacter = iterator.next();

        if (currentWord?.shouldAdd) {
            addCurrentWordToStack(tokens, currentWord);
            currentWord = null;
        }
    }

    return tokens;
}

function tryAddCharacterToCurrent(currentWord: currentWord, character: string) {
    switch (currentWord.type) {
        case 'semiAutoMatch':
            currentWord.shouldAdd = true;
            currentWord.addedCurrentCharacter = false;
            if (currentWord.word === ':' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '>' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '<' && character === '=') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '<' && character === '>') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            if (currentWord.word === '.' && character === '.') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            }
            break;
        case 'identifier':
            if (letters.includes(character) || numbers.includes(character)) {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            } else {
                if (symbols.some(symbol => symbol.symbol === currentWord.word))
                    currentWord.type = 'reservedWord';
                currentWord.shouldAdd = true;
                currentWord.addedCurrentCharacter = false;
            }
            break;
        case 'numeric':
            if (numbers.includes(character)) {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            } else {
                currentWord.shouldAdd = true;
                currentWord.addedCurrentCharacter = false;
            }
            break;
    }
}

function tryFindCurrentWord(character: string): currentWord | undefined {
    if (autoMatchSymbols.includes(character))
        return {
            type: 'autoMatch',
            word: character,
            shouldAdd: true,
            addedCurrentCharacter: true
        };
    if (semiAutoMatchSymbols.includes(character))
        return {
            type: 'semiAutoMatch',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (letters.includes(character))
        return {
            type: 'identifier',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
    if (numbers.includes(character))
        return {
            type: 'numeric',
            word: character,
            shouldAdd: false,
            addedCurrentCharacter: true
        };
}

function addCurrentWordToStack(
    tokens: lexicalTokens[],
    currentWord: currentWord
) {
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
