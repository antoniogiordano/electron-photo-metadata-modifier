const electron = require("electron");
const { dialog, ipcMain } = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  /**
   * Controllo di versione
   */
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`,
  );
  mainWindow.on("closed", () => (mainWindow = null));

  ipcMain.on("invokeAction", (event, arg) => {
    dialog
      .showOpenDialog(mainWindow, {
        properties: ["openFile", "openDirectory"],
      })
      .then((result) => {
        console.log(result.canceled);
        console.log(result.filePaths);
      })
      .catch((err) => {
        console.log(err);
      });
    event.reply("actionReply", "pong");
  });
};

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  process.platform !== "darwin" && app.quit();
});
app.on("activate", () => {
  mainWindow === null && createWindow();
});
