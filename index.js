import settings from "./src/Settings_.js"
import writeData from "./src/writedata.js"
import SmartmeterObis from "smartmeter-obis"
import IPFS from "ipfs-core"

const main = async () => {
  global.ipfs = await IPFS.create()
  let options = settings.getSettings().options
  
  if (options.transportSerialPort === undefined) {
        console.error("TransportSerialPort settings are missing")
    return ""
  } 

  console.log("started reading consolino meter")
  let smTransport = SmartmeterObis.init(options, writeData)
  console.log("started SmartmeterObis process")
  smTransport.process()
  console.log("end SmartmeterObis process")
  setTimeout(smTransport.stop, 6000)
}

main()
