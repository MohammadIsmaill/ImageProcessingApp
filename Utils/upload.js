const {ipcMain,dialog,app} = require('electron')
const fs = require('fs');
const path = require('path');

function uploadImageFile(window){

  // opens a window to choose file
  dialog.showOpenDialog({properties: ['openFile']}).then(result => {

      // checks if window was closed
      if (result.canceled) {
          console.log("No file selected!")
      } else {

          // get first element in array which is path to file selected
          const filePath = result.filePaths[0];
          // console.log(filePath);
          window.webContents.send('folder:path',filePath);
      }
  });
}
module.exports = {uploadImageFile};
