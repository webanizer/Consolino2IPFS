import { Settings} from "./Settings.js";
import namecoin from 'namecoin'
import {getaddressesbylabel, getNewAddress, getAddressInfo} from "./doichain.js"


var sendClient = createClient("send");

export const SEND_CLIENT = sendClient;

var confirmClient = undefined;
var confirmAddress = undefined;
confirmClient = createClient("doichain");

confirmClient = createClient("doichain");
let addressesOfAccount = []
  try {
       addressesOfAccount = getaddressesbylabel(confirmClient);
  }catch(ex){
      logError('new wallet need to create an address first');
  } 
  if(addressesOfAccount.length>0)   confirmAddress = Settings('confirm.doichain.address',addressesOfAccount[0]);
  else confirmAddress = Settings('confirm.doichain.address',getNewAddress(confirmClient,""));  
  
  try{
    //TODO find a better place to validate this address in future
    const validateAddressOutput = getAddressInfo(confirmClient,confirmAddress)
    if(validateAddressOutput === undefined ||
        !validateAddressOutput ||
        !validateAddressOutput.isvalid ||
        !validateAddressOutput.ismine){

      logError('validateAddressOutput:',validateAddressOutput);
      //TODO report to dAPP!
      //throw new Meteor.Error("config.confirm.doichain.address", "Confirm Address is not configured, invalid or not yours.")
    }
  }catch(ex){
    logError('validateAddress:',ex);
  }
//}
export const CONFIRM_CLIENT = confirmClient;
export const CONFIRM_ADDRESS = confirmAddress;


function createClient(settings) {
    return new namecoin.Client({
      host: Settings(settings+'.doichain.host'),
      port: Settings(settings+'.doichain.port'),
      user: Settings(settings+'.doichain.username'),
      pass: Settings(settings+'.doichain.password')
    });
  }