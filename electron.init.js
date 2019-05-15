const {app, BrowserWindow} = require('electron');

'use strict';

let mainWindow;
let context;

function createWindow () {
  
  mainWindow = new BrowserWindow({
    fullscreen : true,
    maximizable: true,
    webPreferences :{
      webSecurity : false
    }
  });

  mainWindow.setMenu(null);
  if(process.argv.slice(1).some(val => val === '--web')){
    require('electron-reload')(__dirname,{
      electron: require(`${__dirname}/node_modules/electron`)
    });
    mainWindow.loadURL('http://localhost:9001/');
  
  }else{
    mainWindow.loadFile('./index.html');
  }


  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow();
  }
});