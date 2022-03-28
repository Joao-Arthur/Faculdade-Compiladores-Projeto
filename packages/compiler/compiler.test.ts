import { compile } from './compiler';
import { symbols } from './symbols';

describe('compiler', () => {
    it('should return the token', () => {
        const source = 'program CompilerProgram;';

        const { tokens, error } = compile(source);

        expect(tokens).toEqual([
            { line: 1, word: 'program', id: symbols.program },
            { line: 1, word: 'compilerprogram', id: symbols.identificador },
            { line: 1, word: ';', id: symbols[';'] }
        ]);

        expect(error).toEqual(undefined);
    });

    it('should return the error', () => {
        const { tokens, error } = compile(`'ill be back`);

        expect(tokens).toEqual(undefined);
        expect(error).toEqual('string não encerrada!');
    });
});
