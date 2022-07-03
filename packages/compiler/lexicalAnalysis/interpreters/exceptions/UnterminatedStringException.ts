export class UnterminatedStringException extends Error {
    constructor(readonly line: number) {
        super(`string não encerrada na linha ${line}!`);
    }
}
