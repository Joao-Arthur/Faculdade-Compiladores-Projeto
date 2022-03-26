import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { FcOpenedFolder } from 'react-icons/fc';
import { readUserFile } from '../../../../lib/readUserFile';
import { BaseButton } from '@/BaseButton';
import { toast } from '@/toast';
import { useEditorStore } from '../Body/Editor/useEditorStore';

export function OpenFileButton() {
    const { setEditorCode } = useEditorStore();
    const { mutate, isSuccess, data } = useMutation(() =>
        toast(readUserFile(), {
            loading: 'Carregando arquivo...',
            success: 'Arquivo carregado com sucesso!',
            error: 'Não foi possível carregar o arquivo!'
        })
    );

    useEffect(() => {
        if (isSuccess) setEditorCode(data);
    }, [isSuccess]);

    return (
        <BaseButton
            title='Abrir (ctrl+o)'
            onClick={mutate}
            Icon={<FcOpenedFolder size={20} />}
        />
    );
}
