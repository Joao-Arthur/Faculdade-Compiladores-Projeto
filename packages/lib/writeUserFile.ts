export async function writeUserFile(payload: string) {
    const textContent: string = await window.ipcRenderer.invoke(
        'my-invokable-ipc',
        {
            type: 'save-file',
            payload
        }
    );
    return textContent;
}
