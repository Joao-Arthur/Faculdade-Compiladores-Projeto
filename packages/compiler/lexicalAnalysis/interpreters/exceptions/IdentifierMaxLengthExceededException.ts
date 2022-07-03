export class IdentifierMaxLengthExceededException extends Error {
    constructor(readonly identiferMaxLength: number) {
        super(
            `o tamanho máximo para um identificador é ${identiferMaxLength} caracteres!`
        );
    }
}
