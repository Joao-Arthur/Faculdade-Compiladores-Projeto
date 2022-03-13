export function readUserFile(): Promise<string> {
    return window.ipcRenderer.invoke('my-invokable-ipc', {
        type: 'open-file'
    });
}
