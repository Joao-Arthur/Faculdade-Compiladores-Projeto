import { reservedWords, symbolsId } from '../symbols';
import { literalObject } from '../types';
import {
    autoMatchSymbols,
    letters,
    numbers,
    semiAutoMatchSymbols,
    stringDelimiter
} from './constants';

type lexicalTokens = {
    id: number;
    word: string;
};

type wordType =
    | 'comment'
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

export function lexicalAnalysis(sourceCode: string): lexicalTokens[] {
    let tokens: lexicalTokens[] = [];
    let currentWord: currentWord | null = null;

    const iterator = sourceCode[Symbol.iterator]();
    let rawCharacter = iterator.next();

    while (!rawCharacter.done || currentWord) {
        const character = rawCharacter.value?.toLocaleLowerCase();

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
        case 'comment':
            currentWord.addedCurrentCharacter = true;
            currentWord.word += character;
            if (currentWord.word.endsWith('*)')) currentWord.shouldAdd = true;
            break;
        case 'string':
            currentWord.addedCurrentCharacter = true;
            if (character === stringDelimiter) {
                currentWord.shouldAdd = true;
            } else {
                currentWord.word += character;
            }
            break;
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
            if (currentWord.word === '(' && character === '*') {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
                currentWord.shouldAdd = false;
                currentWord.type = 'comment';
            }
            break;
        case 'identifier':
            if (letters.includes(character) || numbers.includes(character)) {
                currentWord.word += character;
                currentWord.addedCurrentCharacter = true;
            } else {
                if (reservedWords.includes(currentWord.word))
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
    if (stringDelimiter === character)
        return {
            type: 'string',
            word: '',
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
            tokens.push({ id: symbolsId.literal, word: currentWord.word });
            break;
        case 'numeric':
            tokens.push({ id: symbolsId.inteiro, word: currentWord.word });
            break;
        case 'identifier':
            tokens.push({
                id: symbolsId.identificador,
                word: currentWord.word
            });
            break;
        case 'autoMatch':
        case 'semiAutoMatch':
        case 'reservedWord':
            const foundId = (symbolsId as literalObject<number | undefined>)[
                currentWord.word
            ];
            if (foundId)
                tokens.push({
                    id: foundId,
                    word: currentWord.word
                });
            break;
    }
}

//adicionar comentários
//dúvidas
//tamanho de nome de variaveis
//valor maximo integer
//comentário não encerrado
//string não encerrada
//sintaxe de arrays
//string deve presenvar o case?
