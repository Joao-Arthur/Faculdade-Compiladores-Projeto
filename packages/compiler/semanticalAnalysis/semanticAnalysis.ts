import { token } from '../lexicalAnalysis/types';

function loadVariables(scope: object) {
    return [''];
}

export function semanticAnalysis(tokens: token[]) {
    const scopes = [{}];

    for (const scope of scopes) {
        const scopeVariables: string[] = loadVariables(scope);
    }
}
