const jwt = require('./jwt');

export const protectFunction = (authorization) => {
  return jwt.verifyToken(authorization)
  .then(_ => {
    return 'You are under protected data';
   })
   .catch(err => {
     throw err;
   });
}
