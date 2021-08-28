'use strict'
const jwtLib = require('jsonwebtoken');

const createToken = (params) => {
    if (!process.env.JWT_SECRET || !params) {
        throw Error('Error generating token');
    }
    return new Promise((res, rej) => {
        jwtLib.sign(params, process.env.JWT_SECRET, (err, token) => {
            if (err) {
                rej(err)
            };
            return res(token);
        });
    });
};

const verifyToken = (authorization) => {
    if (!process.env.JWT_SECRET && !authorization) {
        return Promise.reject(new Error('Error verifying token'));
    }

    let token = authorization.split(' ')[1];

    if (!token) {
        return Promise.reject(new Error('Unauthorized'));
    }

    return new Promise((res, rej) => {
        jwtLib.verify(token, process.env.JWT_SECRET, (err, auth) => {
            if (err) {
                rej(err)
            };
            return res(auth);
        });
    });
};

module.exports = {
    createToken,
    verifyToken
};