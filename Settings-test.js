var SettingsTable = {
    doichain: {
      host: "localhost",
      port: "8338",
      username: "admin",
      password: "......",
      smtps: false,
      address: "",
    },
    regtest: {
      host: "localhost",
      port: "8338",
      username: "admin",
      password: "......",
      smtps: false,
      address: "",
    },
    options = {
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
};

export { SettingsTable };