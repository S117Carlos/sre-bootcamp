import { loginFunction } from '../services/login';

export const login = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  // Validate user input
  if (!(username && password)) {
    res.status(400).send({error: "Username and password required"});
    next();
  } else {
    return loginFunction(username, password)
    .then(token => {
      let response = {
        "data": token
      };
      res.send(response);
      next();
    })
    .catch(err => {
      res.status(403).send({error: err && err.message || 'Invalid credentials'});
    });
  }
}
