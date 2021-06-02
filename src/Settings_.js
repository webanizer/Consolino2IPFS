var settings = {
  
    options :{
        protocol: "SmlProtocol",
        transport: "SerialResponseTransport",
        transportSerialPort: "/dev/ttyUSB0",
        transportSerialBaudrate: 9600,
        protocolD0WakeupCharacters: 40,
        protocolD0DeviceAddress: "",
        requestInterval: 900,
        obisNameLanguage: "en",
        obisFallbackMedium: 6,
        debug: 0,
        protocolSmlIgnoreInvalidCRC: true,
        transportSerialDataBits: 8,
        transportSerialStopBits: 1,
        transportSerialParity: "none",
    },      

    getSettings: function () {
        return this;
    },
    setSettings: function (_settings) {

        if (_settings.options.transport !== undefined) this.options.transport = _settings.options.transport        
        if (_settings.options.transportSerialPort !== undefined) this.options.transportSerialPort = _settings.options.transportSerialPort
        if (_settings.options.transportSerialBaudrate !== undefined) this.options.transportSerialBaudrate = _settings.options.transportSerialBaudrate
        if (_settings.options.requestInterval !== undefined) this.options.requestInterval = _settings.options.requestInterval    
        if (_settings.options.obisNameLanguage !== undefined) this.options.obisNameLanguage = _settings.options.obisNameLanguage
        
    },
}

export default settings;
