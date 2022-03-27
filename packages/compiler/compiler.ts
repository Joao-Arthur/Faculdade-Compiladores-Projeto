import { lexicalAnalysis } from './lexicalAnalysis';
import { token } from './lexicalAnalysis/types';

export function compile(source: string) {
    let tokens: token[] | undefined;
    let error: string | undefined;

    try {
        tokens = lexicalAnalysis(source);
    } catch (compileError) {
        if (compileError instanceof Error) error = compileError.message;
    }

    return {
        tokens,
        error
    } as const;
}
