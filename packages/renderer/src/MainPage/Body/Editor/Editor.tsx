import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/mode-pascal';
import 'ace-builds/src-noconflict/snippets/pascal';
import { useEditorStore } from './useEditorStore';

export function Editor() {
    const { editorCode, setEditorCode } = useEditorStore();

    return (
        <div className='flex h-full w-full'>
            <AceEditor
                theme='tomorrow_night'
                mode='pascal'
                fontSize={20}
                height='100%'
                width='100%'
                value={editorCode}
                onChange={newValue => setEditorCode(newValue)}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableLiveAutocompletion: true,
                    enableBasicAutocompletion: true,
                    enableSnippets: true
                }}
            />
        </div>
    );
}
