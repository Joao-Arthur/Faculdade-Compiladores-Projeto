export function readUserFile(): Promise<string> {
    return window.ipcRenderer.invoke('custom-event', {
        type: 'open-file'
    });
}
