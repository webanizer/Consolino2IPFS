import SettingsTable from "./settings/settings-regtest.json";

function getSettings(settings)  {

    var parts = settings.split(".");    
    
    let setting = SettingsTable[parts[0]][parts[1]][parts[2]];
      
    return (setting);
   
}

export { getSettings } ;