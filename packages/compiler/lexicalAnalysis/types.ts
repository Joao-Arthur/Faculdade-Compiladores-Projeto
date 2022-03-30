export type token = {
    line: number;
    id: number;
    word: string;
};

export type wordType =
    | 'comment'
    | 'string'
    | 'autoMatch'
    | 'semiAutoMatch'
    | 'number'
    | 'reservedWord'
    | 'identifier';

export type currentWord = {
    type: wordType;
    word: string;
    shouldAdd: boolean;
    addedCurrentCharacter: boolean;
};
