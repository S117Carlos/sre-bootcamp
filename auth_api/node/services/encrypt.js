'use strict'

const crypto = require('crypto');

const genHash = (value) => {
  return new Promise((res, rej) => {
    try {
       var hash = crypto
      .createHash("sha512")
      .update(value)
      .digest("hex");
       res(hash);
    } catch(err) {
      rej(err);
    }
  })
};

module.exports = {
    genHash
};