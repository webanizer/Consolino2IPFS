import writeData from "./src/writedata.js"
import SmartmeterObis from 'smartmeter-obis'
import IPFS from "ipfs-core"

const main = async () => {  
    
    global.ipfs =  await IPFS.create();

    console.log('started reading consolino meter')

    let options = {
        'protocol': "SmlProtocol",
        'transport': "SerialResponseTransport",
        'transportSerialPort': "/dev/ttyUSB0",
        'transportSerialBaudrate': 9600,
        'protocolD0WakeupCharacters': 40,
        'protocolD0DeviceAddress': '',
        'requestInterval': 900,
        'obisNameLanguage': 'en',
        'obisFallbackMedium': 6,
        'debug': 0,
	      'protocolSmlIgnoreInvalidCRC': true,
	      'transportSerialDataBits': 8,
	      'transportSerialStopBits': 1,
	      'transportSerialParity':  'none'
      }    
      
    var smTransport = SmartmeterObis.init(options, writeData)

    console.log('started SmartmeterObis process')  
    smTransport.process()
    console.log('end SmartmeterObis process') 
    setTimeout(smTransport.stop, 120000)
}

main()
