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
    loginFunction("admin", "secret").then(x => {
      expect(x).to.be.equal("eyJhbGciOiJIUzI1NiJ9.YWRtaW4.jxjAJS_99b0l_21irrGWUOw_6RQsYqy1cT3DoIHil44");
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
  it('Test protected', function () {

    expect("You are under protected data").to.be.equal(protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"));
  });
});
