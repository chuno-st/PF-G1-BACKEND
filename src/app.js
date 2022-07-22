const express = require('express');
const server = express();
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
require('./db.js');

//const { messagesRouter } = require("./messages/messages.router");
const serverRouter = express.Router();

//server.use(bodyParser.json({ limit: '50mb' }));//middelware
//ruteamos que se ejecute server luego de solicitudes a "/"

dotenv.config();
server.use("/api", serverRouter);


server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use('/', routes);

server.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});


module.exports = server;