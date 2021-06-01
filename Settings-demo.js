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
      protocol: "D0Protocol",
      transport: "LocalFileTransport",
      transportSerialPort: "/dev/ir-usb0",
      transportSerialBaudrate: 9600,
      requestInterval: 900,
      transportHttpRequestUrl: "",
      obisNameLanguage: "en",
      transportLocalFilePath: "./test.d0",
      obisFallbackMedium: 6,
    }
};

export { SettingsTable };