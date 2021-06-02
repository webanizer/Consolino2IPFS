import { testSettingsTable } from "./settings-test.js"
import { settingsTable } from "./settings.js"

import writeData from "./src/writedata.js"
import SmartmeterObis from "smartmeter-obis"
import ipfs from "ipfs-core";
import transportLocalFile from  "./src/transportLocalFile.js"
const args = process.argv.slice(2)

const main = async () => {
  global.ipfs = await ipfs.create()
  let options = settingsTable.options  

  if (args[0] == "test"){
      options = testSettingsTable.options
      transportLocalFile(options.transportLocalFilePath)
      console.log("_options", options)      
  }  

  if (options.transportSerialPort === undefined) {
    console.error("TransportSerialPort settings are missing");
    return "";
  }

  console.log("started reading consolino meter");
  let smTransport = SmartmeterObis.init(options, writeData);
  console.log("started SmartmeterObis process");
  smTransport.process();
  console.log("end SmartmeterObis process");
  setTimeout(smTransport.stop, 6000);
};

main();
