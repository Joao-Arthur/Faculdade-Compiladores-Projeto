import { nonTerminalKeys } from './nonTerminalSymbols';
import { symbolsKeys } from './symbols';
import { terminalOrNonTerminalKeys } from './types';

type productionsType = {
    [terminalKey in nonTerminalKeys]: Partial<{
        [terminalKey in symbolsKeys]: terminalOrNonTerminalKeys[];
    }>;
};

export const productions: productionsType = {
    programa: {
        program: ['program', 'identificador', ';', 'bloco', '.']
    },
    bloco: {
        label: [
            'declaracaoRot',
            'declaracaoConst',
            'declaracaoVar',
            'declaracaoProc',
            'corpo'
        ],
        const: [
            'declaracaoRot',
            'declaracaoConst',
            'declaracaoVar',
            'declaracaoProc',
            'corpo'
        ],
        var: [
            'declaracaoRot',
            'declaracaoConst',
            'declaracaoVar',
            'declaracaoProc',
            'corpo'
        ],
        procedure: [
            'declaracaoRot',
            'declaracaoConst',
            'declaracaoVar',
            'declaracaoProc',
            'corpo'
        ],
        begin: [
            'declaracaoRot',
            'declaracaoConst',
            'declaracaoVar',
            'declaracaoProc',
            'corpo'
        ]
    },
    declaracaoRot: {
        label: ['label', 'lId', ';'],
        const: [],
        var: [],
        procedure: [],
        begin: []
    },
    lId: {
        identificador: ['identificador', 'repident']
    },
    repident: {
        ':': [],
        ',': [',', 'identificador', 'repident'],
        ';': []
    },
    declaracaoConst: {
        const: ['const', 'identificador', '=', 'inteiro', ';', 'ldConst'],
        var: [],
        procedure: [],
        begin: []
    },
    ldConst: {
        var: [],
        procedure: [],
        begin: [],
        identificador: ['identificador', '=', 'inteiro', ';', 'ldConst']
    },
    declaracaoVar: {
        var: ['var', 'lId', ':', 'tipo', ';', 'ldVar'],
        procedure: [],
        begin: []
    },
    ldVar: {
        procedure: [],
        begin: [],
        identificador: ['lId', ':', 'tipo', ';', 'ldVar']
    },
    tipo: {
        integer: ['integer'],
        array: ['array', '[', 'inteiro', '..', 'inteiro', ']', 'of', 'integer']
    },
    declaracaoProc: {
        procedure: [
            'procedure',
            'identificador',
            'defpar',
            ';',
            'bloco',
            ';',
            'declaracaoProc'
        ],
        begin: []
    },
    defpar: {
        '(': ['(', 'lId', ':', 'integer', ')'],
        ':': []
    },
    corpo: {
        begin: ['begin', 'comando', 'repComando', 'end']
    },
    repComando: {
        end: [],
        ';': [';', 'comando', 'repComando']
    },
    comando: {
        begin: ['corpo'],
        end: [],
        call: ['call', 'identificador', 'parametros'],
        goto: ['goto', 'identificador'],
        if: ['if', 'expressao', 'then', 'comando', 'elseparte'],
        else: [],
        while: ['while', 'expressao', 'do', 'comando'],
        repeat: ['repeat', 'comando', 'until', 'expressao'],
        until: [],
        readln: ['readln', '(', 'variavel', 'repeticaoVariavel', ')'],
        writeln: ['writeln', '(', 'itemSaida', 'repeticaoItem', ')'],
        identificador: ['identificador', 'rcomid'],
        for: [
            'for',
            'identificador',
            ':=',
            'expressao',
            'to',
            'expressao',
            'do',
            'comando'
        ],
        case: ['case', 'expressao', 'of', 'condicaoCase', 'end'],
        ';': []
    },
    rcomid: {
        '[': ['rVar', ':=', 'expressao'],
        ':=': ['rVar', ':=', 'expressao'],
        ':': [':', 'comando']
    },
    rVar: {
        '[': ['[', 'expressao', ']'],
        ':=': []
    },
    parametros: {
        end: [],
        else: [],
        until: [],
        '(': ['(', 'expressao', 'repeticaoParametro', ')'],
        ';': []
    },
    repeticaoParametro: {
        ')': [],
        ',': [',', 'expressao', 'repeticaoParametro']
    },
    elseparte: {
        end: [],
        else: ['else', 'comando'],
        until: [],
        ';': []
    },
    variavel: {
        identificador: ['identificador', 'variavel1']
    },
    variavel1: {
        end: [],
        of: [],
        then: [],
        else: [],
        do: [],
        until: [],
        or: [],
        and: [],
        to: [],
        '+': [],
        '-': [],
        '*': [],
        '/': [],
        '[': ['[', 'expressao', ']'],
        ']': [],
        ')': [],
        '=': [],
        '>': [],
        '>=': [],
        '<': [],
        '<=': [],
        '<>': [],
        ',': [],
        ';': []
    },
    repeticaoVariavel: {
        ')': [],
        ',': [',', 'variavel', 'repeticaoVariavel']
    },
    itemSaida: {
        not: ['expressao'],
        identificador: ['expressao'],
        inteiro: ['expressao'],
        '+': ['expressao'],
        '-': ['expressao'],
        '(': ['expressao'],
        literal: ['literal']
    },
    repeticaoItem: {
        ')': [],
        ',': [',', 'itemSaida', 'repeticaoItem']
    },
    expressao: {
        not: ['expressaoImp', 'repeticaoExpressaoImp'],
        identificador: ['expressaoImp', 'repeticaoExpressaoImp'],
        inteiro: ['expressaoImp', 'repeticaoExpressaoImp'],
        '+': ['expressaoImp', 'repeticaoExpressaoImp'],
        '-': ['expressaoImp', 'repeticaoExpressaoImp'],
        '(': ['expressaoImp', 'repeticaoExpressaoImp']
    },
    repeticaoExpressaoImp: {
        end: [],
        of: [],
        then: [],
        else: [],
        do: [],
        until: [],
        to: [],
        ']': [],
        ')': [],
        '=': ['=', 'expressaoImp'],
        '>': ['>', 'expressaoImp'],
        '>=': ['>=', 'expressaoImp'],
        '<': ['<', 'expressaoImp'],
        '<=': ['<=', 'expressaoImp'],
        '<>': ['<>', 'expressaoImp'],
        ',': [],
        ';': []
    },
    expressaoImp: {
        not: ['termo', 'repeticaoExpressao'],
        identificador: ['termo', 'repeticaoExpressao'],
        inteiro: ['termo', 'repeticaoExpressao'],
        '+': ['+', 'termo', 'repeticaoExpressao'],
        '-': ['-', 'termo', 'repeticaoExpressao'],
        '(': ['termo', 'repeticaoExpressao']
    },
    repeticaoExpressao: {
        end: [],
        of: [],
        then: [],
        else: [],
        do: [],
        until: [],
        or: ['or', 'termo', 'repeticaoExpressao'],
        to: [],
        '+': ['+', 'termo', 'repeticaoExpressao'],
        '-': ['-', 'termo', 'repeticaoExpressao'],
        ']': [],
        ')': [],
        '=': [],
        '>': [],
        '>=': [],
        '<': [],
        '<=': [],
        '<>': [],
        ',': [],
        ';': []
    },
    termo: {
        not: ['fator', 'repeticaoTermo'],
        identificador: ['fator', 'repeticaoTermo'],
        inteiro: ['fator', 'repeticaoTermo'],
        '(': ['fator', 'repeticaoTermo']
    },
    repeticaoTermo: {
        end: [],
        of: [],
        then: [],
        else: [],
        do: [],
        until: [],
        or: [],
        and: ['and', 'fator', 'repeticaoTermo'],
        to: [],
        '+': [],
        '-': [],
        '*': ['*', 'fator', 'repeticaoTermo'],
        '/': ['/', 'fator', 'repeticaoTermo'],
        ']': [],
        ')': [],
        '=': [],
        '>': [],
        '>=': [],
        '<': [],
        '<=': [],
        '<>': [],
        ',': [],
        ';': []
    },
    fator: {
        not: ['not', 'fator'],
        identificador: ['variavel'],
        inteiro: ['inteiro'],
        '(': ['(', 'expressao', ')']
    },
    condicaoCase: {
        inteiro: ['inteiro', 'repeticaoInteiro', ':', 'comando', 'contCase']
    },
    contCase: {
        end: [],
        ';': [';', 'condicaoCase']
    },
    repeticaoInteiro: {
        ':': [],
        ',': [',', 'inteiro', 'repeticaoInteiro']
    },
    semefeito: {}
};
