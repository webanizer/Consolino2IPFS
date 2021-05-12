# Consolino2IPFS

## Description
1. Reads data from Consolino via serial port
2. Creates a sha256 hash of these data
3. Writes the data straight to a running js-ipfs node
4. Stores a Proof-Of-Existence (PoE) on Doichain via RPC - name_doi 

## Getting started
1. Checkout this repo
2. run ```npm install```
3. run ```node index.js````

### Todo
1. Implement reading serial port
2. Implement 'name_doi' call to Doichain-RPC 
3. Collect data for a certain time e.g. 15 minutes before it gets added to IPFS / Doichain
4. Implement p2plib to inform buyers and authorities about now data in ipfs 

### Resources
1. Serial Port npm package https://www.npmjs.com/package/serialport
2. Example on how to call the RPC on Doichain 
    - getblockcount https://github.com/Doichain/meteor-api/blob/e6bfd0a3ac74b0c1ffdbcd019488deab4d3c4c28/server/api/doichain.js#L223
    - listtransactions https://github.com/Doichain/meteor-api/blob/e6bfd0a3ac74b0c1ffdbcd019488deab4d3c4c28/server/api/doichain.js#L260
    - the rpc-client implementation https://github.com/Doichain/meteor-api/blob/e6bfd0a3ac74b0c1ffdbcd019488deab4d3c4c28/imports/startup/server/doichain-configuration.js
    - namecoin rpc lib - https://www.npmjs.com/package/namecoin 