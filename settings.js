var settingsTable = {
  doichain: {
    host: "localhost",
    port: "8339",
    username: "admin",
    password: "2665722ec1e02d0d3f9ef0a846d4e14f9c64741b1f57cb2696c5c06b48d9",
    smtps: false,
    address: "",
  },
  options: {
    protocol: "D0Protocol",
    transport: "SerialResponseTransport",
    transportSerialPort: "/dev/ir-usb0",
    transportSerialBaudrate: 9600,
    requestInterval: 900,
    transportHttpRequestUrl: "",
    obisNameLanguage: "en",
    transportLocalFilePath: "./test.d0",
    obisFallbackMedium: 6,
  },
};

export { settingsTable }
