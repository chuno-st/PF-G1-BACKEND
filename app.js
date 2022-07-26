const PORT = process.env.PORT || 9000;
const server = require('./src/app.js'); //traemos "server = express"
const { conn } = require('./src/db.js');

//Alter true funciona para al matar terminal y volver a subir se resetea toda la base de datos agregando aquellas columnas que no existen. Luego comentar el alter para que el server levante ya que los ENUM dicen error.
conn.sync({/* alter: true  force: true */}).then(() => {
server.listen(PORT, () => {
    console.log('%s listening at ' + PORT ); // Ponemos a escuchar el servidor y consologeamos
  });
});