//import sha256 from "sha256"
import sha256 from 'sha256'
import IPFS from "ipfs-core"
import writeToIPFS from './ipfs.js'
import writePoEToDoichain from './writeToPoe.js'

import Sleep from './consolino.js'


const main = async () => {
    const ipfs = await IPFS.create()

    console.log('started reading consolino meter')

    console.log('connecting to consolino serial port')

    while(true) {

        console.log('reading data')
        const data = "'Hello world'"
        await Sleep(3000)

        console.log('creating sha256 hash over data')
        const hash = sha256('data');
        console.info('our hash', hash)
        console.info('writing data into ipfs')
        const cid = await writeToIPFS(ipfs, data)
        
        console.info('adding sha256 hash and cid to Doichain')
        writePoEToDoichain(hash,cid)
    }
}

main()
