export class VariableAlreadyDeclaredException extends Error {
    constructor(readonly variable: string) {
        super(`Variável ${variable} redeclarada no mesmo escopo!`);
    }
}
