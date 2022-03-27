import { BaseButton } from '@/BaseButton';
import { errorToast } from '@/toast';
import { FcVideoFile } from 'react-icons/fc';
import { compile } from '../../../../compiler';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function ExecuteButton() {
    const { editorCode, setTokens } = useEditorStore();

    function onClick() {
        const { tokens, error } = compile(editorCode);
        if (tokens) setTokens(tokens);
        if (error) errorToast(error);
    }

    return (
        <BaseButton
            title='Executar (f9)'
            onClick={onClick}
            Icon={<FcVideoFile size={20} />}
        />
    );
}
