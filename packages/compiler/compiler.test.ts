import { compile } from './compiler';
import { symbolsId } from './symbols';

describe('compiler', () => {
    it('should return the token', () => {
        const source = `program CompilerProgram;`;

        const { tokens, error } = compile(source);

        expect(tokens).toEqual([
            { word: 'program', id: symbolsId.program },
            { word: 'compilerprogram', id: symbolsId.identificador },
            { word: ';', id: symbolsId[';'] }
        ]);

        expect(error).toEqual(undefined);
    });

    it('should return the error', () => {
        const { tokens, error } = compile(`'ill be back`);

        expect(tokens).toEqual(undefined);
        expect(error).toEqual('string não encerrada!');
    });
});
