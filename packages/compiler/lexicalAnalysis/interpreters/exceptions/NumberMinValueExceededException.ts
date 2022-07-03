export class NumberMinValueExceededException extends Error {
    constructor(readonly numberMinValue: number) {
        super(`o valor mínimo para um número é ${numberMinValue}!`);
    }
}
