import cryptoRandomString from 'crypto-random-string'
import { getClient } from "../src/doichain-configuration.js"
import chai, { assert } from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

chai.use(chaiHttp);

// start Docker Container in regtest mode
// docker-compose up

describe('Generate Funds and make name_doi tx', function () {
    let regtest = getClient("regtest");
    const credentials = regtest.user + ':' + regtest.pass;
    var url = "http://" + credentials + '@' + regtest.host + ':' + regtest.port;

    it('First generate new address', function () {
        return new Promise(function (resolve,reject) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'getnewaddress'
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                        global.address = response.body.result;
                        expect(response.res).to.have.status(200);   
                        resolve()   
                    }           
                })
        })
    })

    it('Then generate 101 Blocks to the new address', function () {
        return new Promise(function (resolve) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'generatetoaddress',
                    params: [101, global.address]
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                        expect(response.res).to.have.status(200);
                        resolve(); 
                    }                   
                })
        })
    })

    it('Then affirm new balance must be at least 50.0 Doi', function () {
        return new Promise(function (resolve) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'getbalance',
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                        let balance = parseInt(response.body.result);
                        expect(balance).to.be.gte(50);
                        resolve();   
                    }                
                })
        })
    })

    it('should return name_doi txid with status 200', function () {
        // to do test hash und test cid austauschen
        global.testHash = cryptoRandomString({ length: 100, type: 'base64' }).replace(/[/+=]/g, '').substr(-30);
        let testCid = cryptoRandomString({ length: 100, type: 'base64' }).replace(/[/+=]/g, '').substr(-28);
        const parameters = [testHash, testCid];
        return new Promise(function (resolve) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'name_doi',
                    params: parameters
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                    expect(response.res).to.have.status(200);
                    resolve();
                    }
                })
        })
    })

    it('Then generate 1 Block to validate name_doi', function () {
        return new Promise(function (resolve) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'generatetoaddress',
                    params: [1, global.address]
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                        expect(response.res).to.have.status(200);
                        resolve(); 
                    }                   
                })
        })
    })


    it('should return the saved hash with name_show', function () {
        return new Promise(function (resolve) {
            chai
                .request(url)
                .post("/")
                .send({
                    method: 'name_show',
                    params: [testHash]
                })
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Test failed because: " + response.res.statusMessage)
                        reject(response.error);   
                    } else {
                    expect(response.res).to.have.status(200);
                    resolve();
                    }
                })
        })
    })

});
