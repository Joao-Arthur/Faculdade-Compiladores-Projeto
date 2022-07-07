import { lexicalAnalysis } from './lexicalAnalysis';
import { token } from './lexicalAnalysis/types';
import { semanticAnalysis } from './semanticalAnalysis';
import { syntaxAnalysis } from './syntaxAnalysis';
import { syntaxToken } from './syntaxAnalysis/types';

export function compile(source: string) {
    let tokens: token[] | undefined;
    let error: string | undefined;

    try {
        tokens = lexicalAnalysis(source);
        const tokensIds = tokens
            .map(({ id, line }) => ({ line, id }))
            .reverse() as syntaxToken[];
        syntaxAnalysis(tokensIds);
        semanticAnalysis();
    } catch (compileError) {
        if (compileError instanceof Error) error = compileError.message;
    }

    return {
        tokens,
        error
    } as const;
}
