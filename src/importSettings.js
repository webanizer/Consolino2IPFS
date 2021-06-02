<<<<<<< HEAD
import { settingsTable } from "./settings.js";
=======
import { SettingsTable } from "../Settings.js";
>>>>>>> 0.0.2-12.5

function getSettings(settings)  {

    var parts = settings.split(".");    
    
    let setting = settingsTable[parts[0]][parts[1]];
      
    return (setting)
   
}

export { getSettings } ;