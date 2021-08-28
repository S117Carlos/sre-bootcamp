import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'
import connection from '../db/connection';
const expect = chai.expect;

describe('loginFunction()', function () {
  before(() =>  {
    require('dotenv').config();
    connection.init();
  });
  it('Test login', function (done) {
    loginFunction("admin", "secret").then(token => {
      expect(token).to.be.equal("eyJhbGciOiJIUzI1NiJ9.YWRtaW4.jxjAJS_99b0l_21irrGWUOw_6RQsYqy1cT3DoIHil44");
      done();
    })
  });
  it('Invalid Request', function (done) {
    loginFunction("", "")
    .catch(err => {
      expect("Invalid credentials").to.be.equal(err.message);
      done();
    })
  });
  it('Invalid Credentials', function (done) {
    loginFunction("admin", "s")
    .catch(err => {
      expect("Invalid credentials").to.be.equal(err.message);
      done();
    })
  });
});

describe('protectFunction()', function () {
  let tokenData;
  before(() => {
      require('dotenv').config();
      connection.init();
      return loginFunction("admin", "secret").then(token => {
        tokenData = token;
        return;
    });
  });
  it('Test protected', function (done) {
    let auth = `Bearer: ${tokenData}`
    protectFunction(auth)
    .then(res => {
      expect("You are under protected data").to.be.equal(res);
      done();
    }); 
  });
  it('Test protected - No token', function (done) {
    protectFunction('')
    .catch(err => {
      expect("Unauthorized").to.be.equal(err.message);
      done();
    }); 
  });
});
