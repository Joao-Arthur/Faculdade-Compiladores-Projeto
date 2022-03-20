import { BaseButton } from '@/BaseButton';
import { FcVideoFile } from 'react-icons/fc';
import { compiler } from '../../../../compiler';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function ExecuteButton() {
    const { editorCode, setTokens } = useEditorStore();

    function onClick() {
        setTokens(compiler.lexicalCompilation(editorCode));
    }

    return <BaseButton onClick={onClick} Icon={<FcVideoFile size={20} />} />;
}
