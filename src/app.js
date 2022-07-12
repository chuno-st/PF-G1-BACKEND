const express = require('express');
const server = express();
const routes = require('./routes/index.js')
const bodyParser = require('body-parser');
require('./db.js');

//server.use(bodyParser.json({ limit: '50mb' }));//middelware
//ruteamos que se ejecute server luego de solicitudes a "/"

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


module.exports = server;