var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './flamsa-executable-dev-win32-x64',
    outputDirectory: './electron-exe-result-dev',
    authors: 'FLAMSA',
    exe: 'flamsa-executable-dev.exe',
    setupExe : "flamsa-executable-dev.exe",
    skipUpdateIcon : true
  });
 
resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));