import { settingsTable } from "./settings.js";

function getSettings(settings)  {

    var parts = settings.split(".");    
    
    let setting = settingsTable[parts[0]][parts[1]];
      
    return (setting)
   
}

export { getSettings } ;