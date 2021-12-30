const {ipcMain,dialog,app} = require('electron')


function resetImage(window){
      window.webContents.send('image:reset');
}
module.exports = {resetImage};
