import { BrowserWindow, dialog } from 'electron';
import fs from 'fs/promises';

type openFileEvent = { type: 'open-file' };
type saveFileEvent = { type: 'save-file'; payload: string };

type dispatchedEvent = openFileEvent | saveFileEvent;

export function handleCustomMessage(
    win: BrowserWindow | null,
    dispatchedEvent: dispatchedEvent
) {
    switch (dispatchedEvent.type) {
        case 'open-file':
            return openFile(win);
        case 'save-file':
            return saveFile(win, dispatchedEvent.payload);
    }
}

async function openFile(win: BrowserWindow | null) {
    if (!win) return null;
    const chosenFile = await dialog.showOpenDialog(win, {
        filters: [{ name: 'Custom File Type', extensions: ['dfj'] }]
    });
    if (chosenFile.canceled) return null;
    const [path] = chosenFile.filePaths;
    const fileContent = await fs.readFile(path, {
        encoding: 'utf-8'
    });
    return fileContent;
}

async function saveFile(win: BrowserWindow | null, content: string) {
    if (!win) return null;
    const chosenFile = await dialog.showSaveDialog(win, {
        filters: [{ name: 'Custom File Type', extensions: ['dfj'] }]
    });
    if (chosenFile.canceled) return null;
    const path = chosenFile.filePath;
    if (!path) return null;
    const fileContent = await fs.writeFile(path, content, {
        encoding: 'utf-8'
    });
    return fileContent;
}
