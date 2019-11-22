import { app, BrowserWindow, webFrame } from 'electron';

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    icon: 'src/logos/logo.ico',
    minWidth: 1200,
    minHeight: 750,
    width: 1400,
    height: 750,
    center: true,
    title: "Panel administrativo",
    backgroundColor: "#fff",
    webPreferences: {
      zoomFactor: 0.8,
      nodeIntegration: false
    },
  });

  mainWindow.loadURL(`https://restaurant-app-498d7.firebaseapp.com`); // Producción
  // mainWindow.loadURL(`http://localhost:3000/start`) // Desarrollo

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('browser-window-created', (err, window) => {
  window.setMenu(null);
})