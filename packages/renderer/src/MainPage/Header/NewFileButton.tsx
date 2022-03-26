import { BaseButton } from '@/BaseButton';
import { FcDocument } from 'react-icons/fc';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function NewFileButton() {
    const { setEditorCode } = useEditorStore();

    function onClick() {
        setEditorCode('');
    }

    return (
        <BaseButton
            title='Novo (ctrl+n)'
            onClick={onClick}
            Icon={<FcDocument size={20} />}
        />
    );
}
