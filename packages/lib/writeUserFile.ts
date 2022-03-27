export function writeUserFile(
    payload: string
): Promise<'cancelled' | 'error' | 'success'> {
    return window.ipcRenderer.invoke('custom-event', {
        type: 'save-file',
        payload
    });
}
