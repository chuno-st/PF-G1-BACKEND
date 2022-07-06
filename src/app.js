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

server.use('/', routes);


module.exports = server;