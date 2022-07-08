import { symbols } from '../symbols';
import { VariableAlreadyDeclaredException } from './exceptions/VariableAlreadyDeclaredException';
import { VariableNotInScopeException } from './exceptions/VariableNotInScopeException';
import { semanticAnalysis } from './semanticAnalysis';

describe('semanticAnalysis', () => {
    it('should verify duplicated variables', () => {
        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'e', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 7, word: 'currentvalue', id: symbols.identificador },
                { line: 7, word: ':', id: symbols[':'] },
                { line: 7, word: 'integer', id: symbols.integer },
                { line: 7, word: ';', id: symbols[';'] },
                { line: 1, word: 'begin', id: symbols.var },
                { line: 1, word: 'end', id: symbols.var }
            ])
        ).toThrow(VariableAlreadyDeclaredException);
    });

    it('should verify duplicated const', () => {
        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'pi', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'cur', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 7, word: 'currentvalue', id: symbols.identificador },
                { line: 7, word: ':', id: symbols[':'] },
                { line: 7, word: 'integer', id: symbols.integer },
                { line: 7, word: ';', id: symbols[';'] },
                { line: 1, word: 'begin', id: symbols.var },
                { line: 1, word: 'end', id: symbols.var }
            ])
        ).toThrow(VariableAlreadyDeclaredException);
    });

    it('should verify duplicated const and var', () => {
        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'e', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'pi', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 7, word: 'currentvalue', id: symbols.identificador },
                { line: 7, word: ':', id: symbols[':'] },
                { line: 7, word: 'integer', id: symbols.integer },
                { line: 7, word: ';', id: symbols[';'] },
                { line: 1, word: 'begin', id: symbols.var },
                { line: 1, word: 'end', id: symbols.var }
            ])
        ).toThrow(VariableAlreadyDeclaredException);
    });

    it('should verify undeclared variables', () => {
        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'e', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 1, word: 'begin', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':=', id: symbols[':='] },
                { line: 6, word: 'pi', id: symbols.inteiro },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 1, word: 'end', id: symbols.var }
            ])
        ).not.toThrow();

        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'e', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 1, word: 'begin', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':=', id: symbols[':='] },
                { line: 6, word: '4', id: symbols.inteiro },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 6, word: 'cur', id: symbols.identificador },
                { line: 6, word: ':=', id: symbols[':='] },
                { line: 6, word: 'oldvalue', id: symbols.identificador },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 1, word: 'end', id: symbols.var }
            ])
        ).toThrow(VariableNotInScopeException);
    });

    it('should verify duplicated variables between scopes', () => {
        expect(() =>
            semanticAnalysis([
                { line: 1, word: 'program', id: symbols.var },
                {
                    line: 1,
                    word: 'DuplicatedVariablesProgram',
                    id: symbols.program
                },
                { line: 1, word: ';', id: symbols[';'] },
                { line: 2, word: 'const', id: symbols.const },
                { line: 3, word: 'pi', id: symbols.identificador },
                { line: 3, word: '=', id: symbols['='] },
                { line: 3, word: '31415', id: symbols.inteiro },
                { line: 3, word: ';', id: symbols[';'] },
                { line: 4, word: 'e', id: symbols.identificador },
                { line: 4, word: '=', id: symbols['='] },
                { line: 4, word: '1234', id: symbols.inteiro },
                { line: 4, word: ';', id: symbols[';'] },
                { line: 5, word: 'procedure', id: symbols.procedure },
                { line: 5, word: 'printvalue', id: symbols.identificador },
                { line: 5, word: ';', id: symbols[';'] },
                { line: 5, word: 'const', id: symbols.const },
                { line: 5, word: 'pi', id: symbols.identificador },
                { line: 5, word: '=', id: symbols['='] },
                { line: 5, word: '298789', id: symbols.inteiro },
                { line: 5, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 5, word: 'currentvalue', id: symbols.identificador },
                { line: 5, word: ':', id: symbols[':'] },
                { line: 5, word: 'integer', id: symbols.integer },
                { line: 5, word: ';', id: symbols[';'] },
                { line: 5, word: 'begin', id: symbols.begin },
                { line: 5, word: 'end', id: symbols.end },
                { line: 5, word: ';', id: symbols[';'] },
                { line: 5, word: 'var', id: symbols.var },
                { line: 6, word: 'currentvalue', id: symbols.identificador },
                { line: 6, word: ':', id: symbols[':'] },
                { line: 6, word: 'integer', id: symbols.integer },
                { line: 6, word: ';', id: symbols[';'] },
                { line: 7, word: 'currentvalue', id: symbols.identificador },
                { line: 7, word: ':', id: symbols[':'] },
                { line: 7, word: 'integer', id: symbols.integer },
                { line: 7, word: ';', id: symbols[';'] },
                { line: 8, word: 'begin', id: symbols.var },
                { line: 8, word: 'end', id: symbols.var }
            ])
        ).not.toThrow();
    });
});
