const { app, BrowserWindow, Menu, MenuItem,dialog ,ipcMain} = require('electron')
const fs = require('fs');
const path = require('path');
const {uploadImageFile} = require('./Utils/upload.js');
const {saveImageFile} = require('./Utils/save.js');
const {callPythonFunction} = require('./Utils/python-node.js');
const {removeTimeStamp} = require('./Utils/help.js');
const {resetImage} = require('./Utils/reset.js');
let mainWindow;

app.on('ready',()=>{
  fs.writeFile('picture.jpg','',(err)=>{
    if(err) throw err;
    console.log('File is created successfully');
  })
  mainWindow = new BrowserWindow({
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false
    }
  })
  mainWindow.loadFile('index.html')

  mainWindow.on('closed',()=> app.quit())

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
})
ipcMain.on('image:technique',(event,imageTechnique,imagePath)=>{
  callPythonFunction(imageTechnique,removeTimeStamp(imagePath));
    fs.watch(path.join(__dirname,'picture.jpg'),(event,filename)=>{
      mainWindow.webContents.send('image:result',path.join(__dirname,'picture.jpg'));
    })
})
const mainMenuTemplate = [
  {
    label:'File',
    submenu:[
      {
        label:'Upload Image',
        accelerator:process.platform == 'darwin' ? 'CMD+U' : 'CTRL+U',
        click: (()=>{
          uploadImageFile(mainWindow)
        })
      },
      {
        label:'Save Image',
        accelerator:process.platform == 'darwin' ? 'CMD+S':'CTRL+S',
        click: ( ()=>{
          saveImageFile('picture.jpg');
          // console.log(save);
        })

      },
      {
        label:'Reset Image',
        accelerator:process.platform == 'darwin' ? 'CMD+R':'CTRL+R',
        click: (()=>{
          resetImage(mainWindow);
        })
      }
    ]
  }

]
if(process.env.NODE_ENV !== "production"){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        label:'Toggle DevTools',
        click: ((item,focusedWindow)=>{
          focusedWindow.toggleDevTools();
        }),
        accelerator:process.platform == 'darwin' ? 'CMD+I':'Ctrl+I',

      },
      {
        role:'reload',
        accelerator:process.platform == 'darwin' ? 'CMD+J':'CTRL+J'
      }
    ]
  })
}
