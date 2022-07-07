function loadVariables(scope: object) {
    return [''];
}

export function semanticAnalysis() {
    // const variables: string[] = loadVariables();
    const scopes = [{}];

    for (const scope of scopes) {
        const scopeVariables: string[] = loadVariables(scope);
    }
}
