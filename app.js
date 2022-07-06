//const PORT = process.env.PORT//Constante traida por Heroku (.env virtual)
const puerto = 3001;
const server = require('./src/app.js'); //traemos "server = express"
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
server.listen(puerto, () => {
    console.log('%s listening at ' + puerto); // Ponemos a escuchar el servidor y consologeamos
  });
});