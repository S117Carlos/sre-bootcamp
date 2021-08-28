'use strict'
const jwt = require('jsonwebtoken');

const createToken = (params) => {
    if (!process.env.JWT_SECRET || !params) {
        throw Error('Error generating token');
    }
    return new Promise((res, rej) => {
        jwt.sign(params, process.env.JWT_SECRET, (err, token) => {
            if (err) {
                rej(err)
            };
            return res(token);
        });
    });
};

module.exports = {
    createToken
};