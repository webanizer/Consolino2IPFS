var testSettingsTable = {
  doichain: {
    host: "localhost",
    port: "8339",
    username: "admin",
    password: "222",
    smtps: false,
    address: "",
  },
  options: {
    protocol: "D0Protocol",
    transport: "LocalFileTransport",
    transportSerialPort: "/dev/ir-usb0",
    transportSerialBaudrate: 9600,
    requestInterval: 900,
    transportHttpRequestUrl: "",
    obisNameLanguage: "en",
    transportLocalFilePath: "./test.d0",
    obisFallbackMedium: 6,
  },
};

export { testSettingsTable };
