const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 600, height: 200, frame: false, icon: "../images/icon.png", resizable: false, show: false})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../base/splash.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once("ready-to-show", () => 
  {
    mainWindow.show();
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})