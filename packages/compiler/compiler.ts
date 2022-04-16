import { lexicalAnalysis } from './lexicalAnalysis';
import { token } from './lexicalAnalysis/types';
import { symbolsIdsType } from './symbols';
import { syntaxAnalysis } from './syntaxAnalysis';

export function compile(source: string) {
    let tokens: token[] | undefined;
    let error: string | undefined;

    try {
        tokens = lexicalAnalysis(source);
        const tokensIds = tokens
            .map(token => token.id)
            .reverse() as symbolsIdsType[];
        syntaxAnalysis(tokensIds);
    } catch (compileError) {
        if (compileError instanceof Error) error = compileError.message;
    }

    return {
        tokens,
        error
    } as const;
}
