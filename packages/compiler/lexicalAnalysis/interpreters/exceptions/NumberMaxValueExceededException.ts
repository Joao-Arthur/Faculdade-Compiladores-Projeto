export class NumberMaxValueExceededException extends Error {
    constructor(readonly numberMaxValue: number) {
        super(`o valor máximo para um número é ${numberMaxValue}!`);
    }
}
