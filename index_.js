import { settingsTable } from "./settings.js"
import smartMeterInit from "./src/smartMeterInit.js"

import ipfs from "ipfs-core"
global.ipfs = await ipfs.create()

const main = async () => {
  let options =  settingsTable.options
  smartMeterInit(options)  
}

main()
