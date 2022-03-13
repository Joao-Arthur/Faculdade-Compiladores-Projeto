import { BaseButton } from '@/BaseButton';
import { FcCancel } from 'react-icons/fc';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function ClearButton() {
    const { setEditorCode } = useEditorStore();

    function onClick() {
        setEditorCode('');
    }

    return <BaseButton onClick={onClick} Icon={<FcCancel size={20} />} />;
}
