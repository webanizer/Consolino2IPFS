import  { getSettings} from "./importSettings.js";

function getClient(setting){
  let Client = {
    host: getSettings(setting + '.host'),
    port: getSettings(setting + '.port'),
    user: getSettings(setting + '.username'),
    pass: getSettings(setting + '.password')
  };
  return Client;
}

export { getClient };