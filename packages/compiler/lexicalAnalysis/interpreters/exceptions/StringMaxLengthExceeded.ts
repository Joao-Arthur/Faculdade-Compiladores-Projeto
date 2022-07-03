export class StringMaxLengthExceeded extends Error {
    constructor(readonly stringMaxLength: number) {
        super(
            `o tamanho máximo para uma string é ${stringMaxLength} caracteres!`
        );
    }
}
