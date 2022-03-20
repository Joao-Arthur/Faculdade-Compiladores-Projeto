import { lexicalAnalysis } from './lexicalAnalysis';

function lexicalCompilation(source: string) {
    return lexicalAnalysis(source);
}

function fullCompilation(source: string) {}

export const compiler = {
    lexicalCompilation,
    fullCompilation
};
