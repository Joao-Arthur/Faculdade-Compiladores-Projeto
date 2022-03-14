import { Editor } from './Editor';
import { Table } from './Table';

export function Body() {
    return (
        <div className='flex h-full overflow-auto flex-1'>
            <Editor />
            <Table
                data={[
                    { id: 10, token: 'lorem ipsum' },
                    { id: 27, token: 'dolor sit amet' },
                    { id: 19, token: 'guten morgen' }
                ]}
            />
        </div>
    );
}
