import { VariableNotInScopeException } from './exceptions/VariableNotInScopeException';

export function verifyVariableInScope(variables: string[], variable: string) {
    if (!variables.includes(variable))
        throw new VariableNotInScopeException(variable);
}
