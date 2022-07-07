import { symbolsIdsType } from '../symbols';
import { InvalidSyntaxException } from './exceptions/InvalidSyntaxException';
import { syntaxToken } from './types';

export function handleTerminal(
    currentToken: syntaxToken,
    currentProduction: symbolsIdsType,
    tokens: syntaxToken[]
) {
    if (currentToken.id !== currentProduction)
        throw new InvalidSyntaxException(currentToken.line);
    tokens.pop();
}
