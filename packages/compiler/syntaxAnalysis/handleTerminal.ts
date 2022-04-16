import { symbolsIdsType } from '../symbols';

export function handleTerminal(
    currentToken: symbolsIdsType,
    currentProduction: number | undefined,
    tokens: symbolsIdsType[]
) {
    if (currentToken === currentProduction) {
        tokens.pop();
    } else {
        throw new Error('non existe');
    }
}
