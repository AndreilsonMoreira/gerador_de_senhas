const { app, BrowserWindow } = require('electron');
const path = require('path');

//Recarregar a aplicacao de forma automatica sempre que fizer um ajuste

if (!app.isPackaged) { 
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });
}



function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 750,
    icon: path.join(__dirname, 'src', 'createPassword','assets', 'icon.ico'), // <-- Aqui define o ícone
    resizable: false,  // Impede que o usuário redimensione
    maximizable: false, // Impede maximizar
    fullscreenable: false, // Impede fullscree
    autoHideMenuBar: true, // <- Esconde o menu superior
  });

  win.loadFile('./src/createPassword/index.html');

  //win.webContents.openDevTools(); // <--- isso aqui abre o console igual no Chrome
}

app.whenReady().then(createWindow);

