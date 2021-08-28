const dbApi = require('../db/api');
const encrypt = require('./encrypt');
const jwt = require('./jwt');

export const loginFunction = (username, password) => {
  return dbApi.getUserByUsername(username)
  .then(user => {
    if (user && Array.isArray(user) && user.length > 0) {
       return user[0];
    }
    throw Error('Invalid credentials');
  })
  .then(user => {
    let saltedPass = `${password}${user.salt}`;
    return encrypt.genHash(saltedPass)
    .then(hash => {
        return Object.assign({}, user, {hash});
    });
  })
  .then(user => {
    if (user.hash && user.hash === user.password) {
      return jwt.createToken(user.role);
    }
    throw Error('Invalid credentials');
  })
}
