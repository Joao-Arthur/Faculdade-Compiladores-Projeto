export class UnterminatedStringException extends Error {
    constructor() {
        super('string não encerrada!');
    }
}