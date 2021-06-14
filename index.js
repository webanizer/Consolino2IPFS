import { settingsTable } from "./settings.js"
import smartMeterInit from "./src/smartMeterInit.js"



const main = async () => {
  let options =  settingsTable.options
  smartMeterInit(options)  
}

main()
