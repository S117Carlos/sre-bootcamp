var mysql = require('mysql');
var checkConfig = () => {
    if (!process.env.DB_HOST) {
        throw Error('Missing DB Host');
    }
    if (!process.env.DB_USER) {
        throw Error('Missing DB User');
    }
    if (!process.env.DB_PASSWORD) {
        throw Error('Missing DB Password');
    }
    if (!process.env.DB_SCHEMA) {
        throw Error('Missing DB Schema');
    }

    if (!process.env.DB_PORT) {
        throw Error('Missing DB Port');
    }
    return;
};

var dbPool;
var connection = {
    getInstance: function() {
        return dbPool;
    },
    init: function() {
        if (!dbPool) {
            checkConfig();
            dbPool = mysql.createPool({
                host     : process.env.DB_HOST, 
                user     : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                database : process.env.DB_SCHEMA,
                port : process.env.DB_PORT,
                connectionLimit : 10,
            });
        }
        // connection already made
        var oo = 0; 
    }
};

module.exports = connection;