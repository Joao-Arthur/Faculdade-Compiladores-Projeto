import { compile } from './compiler';
import { symbols } from './symbols';

describe('compiler', () => {
    it('should return the token', () => {
        const source = `
Program CompilerProgram;
begin
end.    
`;

        const { tokens, error } = compile(source);

        expect(tokens).toEqual([
            { line: 2, word: 'program', id: symbols.program },
            { line: 2, word: 'compilerprogram', id: symbols.identificador },
            { line: 2, word: ';', id: symbols[';'] },
            { line: 3, word: 'begin', id: symbols.begin },
            { line: 4, word: 'end', id: symbols.end },
            { line: 4, word: '.', id: symbols['.'] }
        ]);

        expect(error).toEqual(undefined);
    });

    it('should return the lexical error', () => {
        const { tokens, error } = compile(`'ill be back`);

        expect(tokens).toEqual(undefined);
        expect(error).toEqual('string não encerrada na linha 1!');
    });

    it('should return the lexical error', () => {
        const { error } = compile(`
Program Invalid Name;
begin
end.
`);

        expect(error).toEqual('sintaxe inválida na linha 2!');
    });
});
