export class UnterminatedCommentException extends Error {
    constructor(line: number) {
        super(`comentário não encerrado na linha ${line}!`);
    }
}