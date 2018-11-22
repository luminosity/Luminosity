const {remote} = require("electron")

window.addEventListener("load", () => {
    document.getElementById("minimize").addEventListener("click", () => {
        remote.BrowserWindow.getFocusedWindow().minimize()
    })

    document.getElementById("maximize").addEventListener("click", () => {
        remote.BrowserWindow.getFocusedWindow().maximize()
    })

    document.getElementById("close").addEventListener("click", () => {
        window.close()
    })
})