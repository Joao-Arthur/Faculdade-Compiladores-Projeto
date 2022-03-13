import { BrowserWindow, dialog } from 'electron';

export async function handleCustomMessage(win: BrowserWindow) {
    if (!win) return null;
    const chosenFile = await dialog.showOpenDialog(win, {
        filters: [{ name: 'Custom File Type', extensions: ['dfj'] }]
    });
    if (chosenFile.canceled) return null;
    const [path] = chosenFile.filePaths;
    const fileContent = await fs.readFile(path, { encoding: 'utf-8' });

    const chosenFile = await dialog.showSaveDialog(win, {
        filters: [{ name: 'Custom File Type', extensions: ['dfj'] }]
    });
}
