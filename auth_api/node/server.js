const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
import * as routes from './routes';
import connection from './db/connection';
// Config ENV variables
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//header middlewares
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
routes.init(app);
connection.init();



export default app;
