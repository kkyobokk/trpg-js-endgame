const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');
const fs = require('fs')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 640,
        height: 480,
        webPreferences: { 
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
    }
    });
 
    win.loadFile('src/build/index.html');
};

app.whenReady().then(() => {
    createWindow();
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('Stat', (evt, data) => { 
    fs.writeFileSync('./src/src/data/PlayerData.json', JSON.stringify(data));
})

ipcMain.on('Equip', (evt, data) => { 
    fs.writeFileSync('./src/src/data/PlayerData.json', JSON.stringify(data));
})