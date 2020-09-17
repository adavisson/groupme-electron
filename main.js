const { app, BrowserWindow, session, Notification } = require('electron')
const os = require('os')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1300,
    height: 900,
    title: 'Groupme',
  })

  win.loadURL('https://www.groupme.com')
  win.webContents.on('new-window', (e, url) => {
    e.preventDefault()
    require('electron').shell.openExternal(url)
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})