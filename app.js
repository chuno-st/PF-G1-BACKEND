const PORT = process.env.PORT || 9000;
const server = require('./src/app.js'); //traemos "server = express"
const { conn } = require('./src/db.js');
const URL = process.env.RAILWAY_STATIC_URL

//Alter true funciona para al matar terminal y volver a subir se resetea toda la base de datos agregando aquellas columnas que no existen. Luego comentar el alter para que el server levante ya que los ENUM dicen error.
conn.sync({/*alter: false force: true*/}).then(() => {
server.listen(PORT, () => {
    console.log('%s listening at ' + PORT + ' STATIC URL= ' + URL); // Ponemos a escuchar el servidor y consologeamos
  });
});