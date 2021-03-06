import { token } from '../lexicalAnalysis/types';
import { symbols } from '../symbols';
import { VariableAlreadyDeclaredException } from './exceptions/VariableAlreadyDeclaredException';
import { VariableNotInScopeException } from './exceptions/VariableNotInScopeException';

type variable = {
    name: string;
    level: number;
};

export function semanticAnalysis(tokens: token[]) {
    let variables: variable[] = [];

    let level = 0;
    let isLoadingVariables = false;
    let isVerifyingVariables = false;
    let isLoadingProcedureName = false;

    for (const currentToken of tokens) {
        console.log(variables);

        if (
            currentToken.id === symbols.var ||
            currentToken.id === symbols.const
        ) {
            isLoadingVariables = true;
            isVerifyingVariables = false;
            continue;
        }

        if (currentToken.id === symbols.procedure) {
            isLoadingVariables = false;
            isVerifyingVariables = false;
            isLoadingProcedureName = true;
            level++;
            continue;
        }

        if (
            isLoadingProcedureName &&
            currentToken.id === symbols.identificador
        ) {
            console.log(
                'iurhgfewurghtrwiuphrtiughrwpiuhgripuhgrewphiureghpiutrhpiutrghpiwreu'
            );
            const foundVariable = variables.find(
                variable => variable.name === currentToken.word
            );
            if (foundVariable && foundVariable.level === level) {
                throw new VariableAlreadyDeclaredException(currentToken.word);
            } else {
                variables.push({ name: currentToken.word, level: level - 1 });
            }
            isLoadingProcedureName = false;
            continue;
        }

        if (currentToken.id === symbols.program) {
            isLoadingVariables = false;
            isVerifyingVariables = false;
            level++;
            continue;
        }

        if (currentToken.id === symbols.begin) {
            isLoadingVariables = false;
            isVerifyingVariables = true;
            continue;
        }
        if (currentToken.id === symbols.end) {
            variables = variables.filter(variable => variable.level !== level);
            level--;
            continue;
        }

        if (isLoadingVariables) {
            if (currentToken.id === symbols.identificador) {
                const foundVariable = variables.find(
                    variable => variable.name === currentToken.word
                );
                if (foundVariable && foundVariable.level === level) {
                    throw new VariableAlreadyDeclaredException(
                        currentToken.word
                    );
                } else {
                    variables.push({ name: currentToken.word, level });
                }
            }
            continue;
        }

        if (isVerifyingVariables) {
            if (currentToken.id === symbols.identificador) {
                if (
                    variables.findIndex(
                        variable => variable.name === currentToken.word
                    ) === -1
                )
                    throw new VariableNotInScopeException(currentToken.word);
            } else continue;
        }
    }
}
