const DBPOOL = require('./connection')

module.exports = {
    getUserByUsername: function(username='') {
        return new Promise((res, rej) => {

            var conn = DBPOOL.getInstance();
            if (!conn) throw new Error('No connected');
            conn.getConnection(function(err, connection) {
                if (err) rej(err); // not connected!
               
                // Use the connection
                connection.query('SELECT username, salt, password, role FROM `users` WHERE `username` = ?', [username], function (error, results, fields) {
                  // When done with the connection, release it.
                  connection.release();
               
                  // Handle error after the release.
                  if (error) rej(error);
               
                  // Don't use the connection here, it has been returned to the pool.
                  res(results);
                });
              });
        });
    }
};