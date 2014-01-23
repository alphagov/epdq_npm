var EPDQ = require('../epdq'),
    Request = require('../epdq/request'),
    should = require('should');

describe("Request", function(){
  it("should shasign sha1 correctly", function(){
    EPDQ.shaIn = "Mysecretsig1875!?";
    EPDQ.pspId = "MyPSPID";
    var req = new Request(EPDQ, {amount: '1500', currency: 'EUR', language: 'en_US', orderid: '1234'});
    req.shaSign().should.equal("F4CC376CD7A834D997B91598FA747825A238BE0A");
  });
});
