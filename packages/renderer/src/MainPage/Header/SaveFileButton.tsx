import { useMutation } from 'react-query';
import { writeUserFile } from '../../../../lib/writeUserFile';
import { BaseButton } from '@/BaseButton';
import { toast } from '@/toast';
import save from '@/assets/save.svg';
import { useEditorStore } from '../Body/Editor/useEditorStore';
import { toast as hotToast } from 'react-hot-toast';

export function SaveFileButton() {
    const { editorCode } = useEditorStore();
    const { mutate } = useMutation(() =>
        toast(writeUserFile(editorCode), {
            loading: 'Salvando arquivo...',
            success: 'Arquivo salvo com sucesso!',
            error: 'Não foi possível salvar o arquivo!'
        }).then(res => {
            if (res === 'cancelled') hotToast.dismiss();
        })
    );

    async function onClick() {
        mutate();
    }

    return (
        <BaseButton
            title='Salvar (ctrl+s)'
            onClick={onClick}
            Icon={<img src={save} alt='salvar' />}
        />
    );
}
