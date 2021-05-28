import  { getSettings} from "./importSettings.js";

var doichainClient = createClient("doichain");

function createClient(settings) {
  let Client = {
      host: getSettings(settings + '.host'),
      port: getSettings(settings + '.port'),
      user: getSettings(settings + '.username'),
      pass: getSettings(settings + '.password')
    };
    return Client;
  }

export const DOICHAIN_CLIENT = doichainClient;