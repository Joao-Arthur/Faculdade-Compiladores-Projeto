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
    | 'numeric'
    | 'reservedWord'
    | 'identifier';

export type currentWord = {
    type: wordType;
    word: string;
    shouldAdd: boolean;
    addedCurrentCharacter: boolean;
};
