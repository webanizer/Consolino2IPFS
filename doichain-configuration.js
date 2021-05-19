import  { getSettings} from "./Settings.js";
import namecoin from 'namecoin'

var confirmClient = undefined;

confirmClient = createClient("confirm");

export const CONFIRM_CLIENT = confirmClient;

function createClient(settings) {
    return new namecoin.Client({
      host: getSettings(settings+'.doichain.host'),
      port: getSettings(settings+'.doichain.port'),
      user: getSettings(settings+'.doichain.username'),
      pass: getSettings(settings+'.doichain.password')
    });
  }