async function getClient(setting, mode) {
  // Wenn beim Testen eine Umgebungsvariable CONSOLINNO_SETTINGS gefunden wird 
  // soll diese testSettings.js benutzt werden
 /* if (mode == 'regtest') {
    let Client = {
      host: getTestSettings(setting + '.host'),
      port: getTestSettings(setting + '.port'),
      user: getTestSettings(setting + '.username'),
      pass: getTestSettings(setting + '.password')
    };
    return Client;
  } else {
    let Client = {
      host: getSettings(setting + '.host'),
      port: getSettings(setting + '.port'),
      user: getSettings(setting + '.username'),
      pass: getSettings(setting + '.password')
    };
    return Client;
  }*/
  if(process.env.CONSOLINNO_SETTINGS == undefined){
    let {host } = await import('./settings.json');

  }
  else{
    console.log(process.env.CONSOLINNO_SETTINGS)
    let {settingsTable} = await import(process.env.CONSOLINNO_SETTINGS);
    console.log(settingsTable)
  }

}

function getTestSettings(settings) {

  var parts = settings.split(".");
  let setting = settingsTable[parts[0]][parts[1]];
  return (setting)

}

function getSettings(settings) {

  var parts = settings.split(".");
  let setting = settingsTable[parts[0]][parts[1]];
  return (setting)

}

export { getClient };
