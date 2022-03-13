export function writeUserFile(payload: string): Promise<void> {
    return window.ipcRenderer.invoke('custom-event', {
        type: 'save-file',
        payload
    });
}
