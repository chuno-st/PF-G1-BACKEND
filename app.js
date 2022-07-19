// const puerto = 3001;
const { serverPort } = require("./src/config/env.dev");

const server = require('./src/app.js'); //traemos "server = express"
const { conn } = require('./src/db.js');


//Alter true funciona para al matar terminal y volver a subir se resetea toda la base de datos agregando aquellas columnas que no existen. Luego comentar el alter para que el server levante ya que los ENUM dicen error.
conn.sync({/*alter: false force: true*/}).then(() => {
server.listen(serverPort, () => {
    console.log('%s listening at ' + serverPort); // Ponemos a escuchar el servidor y consologeamos
  });
});