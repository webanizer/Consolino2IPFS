//import sha256 from "sha256"
var sha256 = require('sha256');
var IPFS = require('IPFS')

let ipfs

const writeToIPFS = async (data) => {
    const { cid } = await ipfs.add(data)
    return cid 
}

const Sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * 1. Craete Doichain transaction name_doi
 * 2. Sign transaction with PrivateKey
 * 3. Broadcast transactaction to Doichain Core
 * 
 * @param {*} cid 
 * @param {*} hash 
 */
const writePoEToDoichain = (cid, hash) => {
    

}

const main = async () => {
    ipfs = await IPFS.create()

    console.log('started reading consolino meter')

    console.log('connecting to consolino serial port')

    while(true) {

        console.log('reading data')
        const data = "'Hello world'"
        await Sleep(3000)

        console.log('creating sha256 hash over data')
        const hash = sha256('data');
        console.log('our hash', hash)
        console.log('writing data into ipfs')
        const cid = await writeToIPFS(data)
        
        console.log('adding sha256 hash to Doichain')
        writePoEToDoichain(hash,cid)
    }
}

main()
