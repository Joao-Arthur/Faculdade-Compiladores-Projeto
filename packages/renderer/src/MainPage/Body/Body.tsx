import { Editor } from './Editor';
import { useEditorStore } from './Editor/useEditorStore';
import { Table } from './Table';

export function Body() {
    const { tokens } = useEditorStore();

    return (
        <div className='flex h-full overflow-auto flex-1'>
            <Editor />
            <Table data={tokens} />
        </div>
    );
}
