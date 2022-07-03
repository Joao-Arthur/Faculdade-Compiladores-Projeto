export class UnterminatedCommentException extends Error {
    constructor(readonly line: number) {
        super(`comentário não encerrado na linha ${line}!`);
    }
}
