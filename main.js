const { app, BrowserWindow, session, globalShortcut } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: true,
    frame: false,
    kiosk: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.loadURL("https://leetcode.com/accounts/login/");

  session.defaultSession.webRequest.onBeforeRequest({ urls: ['*://*/*'] }, (details, callback) => {
    if (!details.url.startsWith('https://leetcode.com')) {
      callback({ cancel: true });
    } else {
      callback({ cancel: false });
    }
  });

  setTimeout(() => {
    app.quit();
  }, 3600000);  // 1 hour in milliseconds , convert accordingly
}

app.whenReady().then(() => {
  createWindow();

  globalShortcut.register('Alt+Tab', () => {});
  globalShortcut.register('Cmd+Tab', () => {});
  globalShortcut.register('Ctrl+Shift+I', () => {});
  globalShortcut.register('Cmd+Option+I', () => {});
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
