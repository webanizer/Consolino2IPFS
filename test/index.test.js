
import { testSettingsTable } from "../settings-test.js"
import smartMeterInit from "../src/smartMeterInit.js"
import transportLocalFile from "./transportLocalFile.js"
import chai from "chai";
import chaiHttp from "chai-http";
import mock from "mock-require";
mock("serialport", "virtual-serialport")
import * as compose from "docker-compose"

describe("Integrationstest", function () {
  beforeEach(() => {})
  afterEach(() => {})

  it("started SmartmeterObis process", async function () {
    const options = testSettingsTable.options;
    transportLocalFile(options.transportLocalFilePath);
    console.log("___options", options);
    smartMeterInit(options);
  });
})