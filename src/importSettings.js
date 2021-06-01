import { SettingsTable } from "./Settings.js";

function getSettings(settings)  {

    var parts = settings.split(".");    
    
    let setting = SettingsTable[parts[0]][parts[1]];
      
    return (setting);
   
}

export { getSettings } ;