/*
import cryptoRandomString from 'crypto-random-string'
import { getClient } from "../src/doichain-configuration.js" 
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

chai.use(chaiHttp);

// start Docker Container in regtest mode
// docker-compose up
// in Settings.js add RPC username and password from .doichain/doichain.conf in regtest container
// in Settings.js add host and port of regtest container


let regtest = getClient("regtest");
let testHash = cryptoRandomString({ length: 100, type: 'base64' }).replace(/[/+=]/g, '').substr(-30);
let testCid = cryptoRandomString({ length: 100, type: 'base64' }).replace(/[/+=]/g, '').substr(-28);
const credentials = regtest.user + ':' + regtest.pass;
const parameters = [testHash, testCid];


describe('Test group', function () {
    var url = "http://" + credentials + '@' + regtest.host + ':' + regtest.port;

    it('should return name_doi txid with status 200', function (done) {
        chai
            .request(url)
            .post("/")
            .send({
                method: 'name_doi',
                params: parameters
            })
            .then((response) => { 
                if (response.status !== 200) {
                    console.log("Request failed because: " + response.res.statusMessage);
                }
                expect(response.res).to.have.status(200);
                done();
             }).catch(done)
    })
});
*/
