
import { testSettingsTable } from "../settings-test.js"
import smartMeterInit from "../src/smartMeterInit.js"
import transportLocalFile from "../src/transportLocalFile.js"
import chai from "chai";
import chaiHttp from "chai-http";
import mock from "mock-require";
mock("serialport", "virtual-serialport")
import * as compose from "docker-compose"


//import fs from "fs"

describe("Integrationstest", function () {
  beforeEach(() => {

  });
  afterEach(() => {});

  it("should create a node with a custom repo path", async function () {
      
    const options = testSettingsTable.options;
    transportLocalFile(options.transportLocalFilePath);



      console.log("___options", options);

      //smartMeterInit(options)



    
    /*
    const main = async () => {
      let options = settingsTable.options;
      smartMeterInit(options);
    };

    main()
*/
    //import * as compose from "docker-compose";
    //import transportLocalFile from  "./src/transportLocalFile.js"
    /*
    switch (args[0]) {
      case "test":
        options = testSettingsTable.options;
        var testData =
          "/?Bla0!\r\n6.8(0029.055*MWh)6.26(01589.28*m3)9.21(00010213)6.26*01(01563.92*m3)6.8*01(0028.086*MWh)F(0)9.20(64030874)6.35(60*m)6.6(0017.2*kW)6.6*01(0017.2*kW)6.33(001.476*m3ph)9.4(088*C&082*C)6.31(0030710*h)6.32(0000194*h)9.22(R)9.6(000&00010213&0)9.7(20000)6.32*01(0000194*h)6.36(01-01)6.33*01(001.476*m3ph)6.8.1()6.8.2()6.8.3()6.8.4()6.8.5()6.8.1*01()6.8.2*01()6.8.3*01()\r\n6.8.4*01()6.8.5*01()9.4*01(088*C&082*C)6.36.1(2013-11-28)6.36.1*01(2013-11-28)6.36.2(2016-09-24)6.36.2*01(2016-09-24)6.36.3(2015-03-26)6.36.3*01(2015-03-26)6.36.4(2013-09-27)6.36.4*01(2013-09-27)6.36.5(2000-00-00)6.36*02(01)9.36(2017-01-18&01:36:47)9.24(0.6*m3ph)9.17(0)9.18()9.19()9.25()9.1(0&1&0&-&CV&3&2.14)9.2(&&)0.0(00010213)!\r\n";
        fs.writeFileSync(options.transportLocalFilePath, testData);

        // Start Doichain node-only in regtest mode from docker-compose.yml
        await compose.upAll({ cwd: "./", log: true }).then(
          () => {
            console.log("done");
          },
          (err) => {
            console.log("something went wrong:", err.message);
          }
        );
        break;
    }

    if (options.transportSerialPort === undefined) {
      console.error("TransportSerialPort settings are missing");
      return "";
    }
    */
  });
});