const {BrowserWindow} = require('electron').remote
const currentWindow = require('electron').remote.getCurrentWindow()
const path = require('path')
const url = require('url')

function proceedToMainApplicationWindow()
{
    let applicationWindow = new BrowserWindow({minWidth: 1000, minHeight: 500, width: 1000, height: 500, frame: false, icon: "./images/icon.png", show: false, backgroundColor: "#EDF0F2"})
    applicationWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../base/main.html'),
        protocol: 'file:',
        slashes: true
    }))

    applicationWindow.once("ready-to-show", () =>
    {
        currentWindow.hide()
        applicationWindow.show()
    })

    applicationWindow.on('closed', function () {
        currentWindow.close()
    })
}

window.onload = () => {
    window.setTimeout(proceedToMainApplicationWindow, 2000)
}