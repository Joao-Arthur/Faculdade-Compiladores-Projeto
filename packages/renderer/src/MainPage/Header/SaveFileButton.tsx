import { BaseButton } from '@/BaseButton';
import { useEditorStore } from '../Body/Editor/useEditorStore';
import { writeUserFile } from '../../../../lib/writeUserFile';
import save from '@/assets/save.svg';

export function SaveFileButton() {
    const { editorCode } = useEditorStore();

    async function onClick() {
        writeUserFile(editorCode);
    }

    return <BaseButton onClick={onClick} Icon={<img src={save} />} />;
}
