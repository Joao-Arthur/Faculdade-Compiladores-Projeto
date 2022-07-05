export class VariableNotInScopeException extends Error {
    constructor(readonly variable: string) {
        super(`Variável ${variable} não declarada no escopo!`);
    }
}
