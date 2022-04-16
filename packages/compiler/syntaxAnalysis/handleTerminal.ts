import { symbolsIdsType } from '../symbols';

export function handleTerminal(
    currentToken: symbolsIdsType,
    currentProduction: symbolsIdsType,
    tokens: symbolsIdsType[]
) {
    if (currentToken !== currentProduction) throw new Error('Sintaxe inválida');
    tokens.pop();
}
