import { settingsTable } from "../settings.js";
import { testSettingsTable } from "../settings-test.js";

function getClient(setting, mode) {
  if (mode == 'test') {
    let Client = {
      host: getTestSettings(setting + '.host'),
      port: getTestSettings(setting + '.port'),
      user: getTestSettings(setting + '.username'),
      pass: getTestSettings(setting + '.password')
    };
    return Client;
  } else {
    let Client = {
      host: getSettings(setting + '.host'),
      port: getSettings(setting + '.port'),
      user: getSettings(setting + '.username'),
      pass: getSettings(setting + '.password')
    };
    return Client;
  }
}

function getTestSettings(settings) {

  var parts = settings.split(".");
  let setting = testSettingsTable[parts[0]][parts[1]];
  return (setting)

}

function getSettings(settings) {

  var parts = settings.split(".");
  let setting = settingsTable[parts[0]][parts[1]];
  return (setting)

}

export { getClient };
