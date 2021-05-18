import { SEND_CLIENT } from './doichain-configuration.js'
/**
 * 1. Craete Doichain transaction name_doi
 * 2. Sign transaction with PrivateKey
 * 3. Broadcast transactaction to Doichain Core 
 * 
 * @param {*} cid 
 * @param {*} hash 
 */
const writePoEToDoichain = (cid, hash) => {
    console.log('wrote to Doichain')

    // Variante A) 
        //Doichain - RPC name_doi aufrufen mit hash & cid 
        //wir benutzen die wallet von doichaind
        //nodes benötigen coins
        //coins können gestohlen werden
        const hashedMeterData ="QmetYy9oHdSG7zEeaf9EJKPgBhUQhG5AMcPq1SJw8rrtev"
        const nameDoiTx = nameDoi(CONFIRM_CLIENT, hashedMeterData.nameId, 'verified',false);
        logConfirm('writing to blockchain',nameDoiTx)
       
    // Variante B)    
        //1. create transaction over js-doichain lib
        //2. signieren over js-doichain lib
        //3. Doichain RPC sendrawtransaction
        //4. Broadcast über RPC

    // Variante C) 
        //wie Variante B) nur broadcast auf Electrum Server
        
        //---> Bei allen Varianten brauchen wir DoiCoins auf dem Node 
        

}
export default writePoEToDoichain


