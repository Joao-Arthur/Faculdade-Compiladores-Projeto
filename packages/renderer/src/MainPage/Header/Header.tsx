import { ClearButton } from './ClearButton';
import { ExecuteButton } from './ExecuteButton';
import { NewFileButton } from './NewFileButton';
import { OpenFileButton } from './OpenFileButton';
import { SaveFileButton } from './SaveFileButton';

export function Header() {
    return (
        <div className='flex items-center gap-1 bg-primary'>
            <NewFileButton />
            <OpenFileButton />
            <SaveFileButton />
            <ClearButton />
            <ExecuteButton />
        </div>
    );
}
