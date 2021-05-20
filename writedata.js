import sha256 from 'sha256'
import IPFS from "ipfs-core"
import writeToIPFS from './ipfs.js'
import writePoEToDoichain from './doichain.js'
import Sleep from './consolino.js'
import writePoEToDoichain from './writePoEToDoichain.js'

const writeData = async (err, obisResult) => {          
      
    const ipfs = await IPFS.create()   
  
    let obisJSON = { }

    if (err) {
      console.error('err', err)      
      return;
    }    
    
    for (let obisId in obisResult) {    
        obisJSON[obisResult[obisId].idToString()] = obisResult[obisId].valueToString()
    }

    obisJSON["timestamp"] = Date.now()
    let stringJSON = JSON.stringify(obisJSON)
    console.log("__tringJSON", stringJSON)

    console.log('creating sha256 hash over data')
    const hash = sha256('stringJSON ')
    console.info('__our hash', hash)

    console.info('writing data into ipfs')
    const cid = await writeToIPFS(ipfs, stringJSON)
    console.info('__cid', cid)    

    ipfs.stop()    
    

    
        console.info('adding sha256 hash and cid to Doichain')
        writePoEToDoichain(hash,cid)

   
}
export default writeData


