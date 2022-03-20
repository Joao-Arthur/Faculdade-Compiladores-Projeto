import create from 'zustand';

type token = {
    id: number;
    word: string;
};

type state = {
    editorCode: string;
    setEditorCode: (editorCode: string) => void;
    tokens: token[];
    setTokens: (tokens: token[]) => void;
};

export const useEditorStore = create<state>(set => ({
    editorCode: '',
    setEditorCode: (editorCode: string) => set(() => ({ editorCode })),
    tokens: [],
    setTokens: (tokens: token[]) => set(() => ({ tokens }))
}));
