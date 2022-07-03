export class InvalidSyntaxException extends Error {
    constructor(readonly line: number) {
        super(`sintaxe inválida na linha ${line}!`);
    }
}
