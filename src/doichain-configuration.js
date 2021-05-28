import  { getSettings} from "./importSettings.js";
import namecoin from 'namecoin'

var doichainClient = createClient("doichain");

function createClient(settings) {
  return new namecoin.Client( {
      host: getSettings(settings + '.host'),
      port: getSettings(settings + '.port'),
      user: getSettings(settings + '.username'),
      pass: getSettings(settings + '.password')
    });    
  }

export const DOICHAIN_CLIENT = doichainClient;