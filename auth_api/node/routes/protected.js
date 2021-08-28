import { protectFunction } from '../services/protected';

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).send({error: "Unauthorized"});
    next();
  } else { 
    return protectFunction(authorization)
    .then(data => {
      let response = {
        "data": data 
      };
      res.send(response);
      next();
    })
    .catch(_err => {
      res.status(403).send({error: 'Unauthorized'});
    });
  }
}
