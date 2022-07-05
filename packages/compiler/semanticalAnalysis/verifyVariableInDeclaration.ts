import { VariableAlreadyDeclaredException } from './exceptions/VariableAlreadyDeclaredException';

export function verifyVariableInDeclaration(
    variables: string[],
    variable: string
) {
    if (variables.includes(variable))
        throw new VariableAlreadyDeclaredException(variable);
}
