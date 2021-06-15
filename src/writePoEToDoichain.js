import { getClient } from "./getClient.js"
import { nameDoi } from "./rpcCalls.js"
import checkBalance from "./checkBalance.js"

/**
 * 1. Craete Doichain transaction name_doi
 * 2. Sign transaction with PrivateKey
 * 3. Broadcast transactaction to Doichain Core 
 * 
 * @param {*} cid 
 * @param {*} hash 
 */
const writePoEToDoichain = async (cid, hash) => {

        console.log("CID in die Doichainspeichern: " + cid);  
        console.log("Hash in die doichain speichern: " + hash)
        // If you run in test mode uncomment line 17 and comment line 19
        // const nameDoiTx = await nameDoi(getClient("doichain","regtest"), hash, cid.toString(),false);

        const client = getClient("doichain","")
        const credentials = client.user + ':' + client.pass;
        const url = 'http://' + credentials + '@' + client.host + ':' + client.port

        // Check if there are still enough Doi in the wallet for the name tx
        await checkBalance(url);
        const nameDoiTx = await nameDoi(url, hash, cid.toString(),false);

        console.log("Ende von Poe")

}
export default writePoEToDoichain


