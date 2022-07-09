require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  PGUSER,
  PGPORT,
  PGHOST,
  PGDATABASE,
  PGPASSWORD,
} = process.env;


const sequelize = new Sequelize(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  /* dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }, */
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

  // Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Category, Material, Product, SubCategory, User, Color } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//Product.belongsToMany(Material, { through: 'ProductMaterial' });

//Material.belongsToMany(Product, { through: 'ProductMaterial' });
//Item.belongsToMany(Materials, { through: 'ItemMaterial' }); EJEMPLO

Category.hasMany( Product, {
  foreignKey: 'category_id'
});

Product.belongsTo( Category, {
  foreignKey: 'category_id'
});

//subcategory_id	material_id

Material.hasMany( Product, {
  foreignKey: 'material_id'
});

Product.belongsTo( Material, {
  foreignKey: 'material_id'
});
//-------------------
SubCategory.hasMany( Product, {
  foreignKey: 'subCategory_id'
});

Product.belongsTo( SubCategory, {
  foreignKey: 'subCategory_id'
});
//-------------------
Product.belongsToMany(Color, {through:"product_color"})
Color.belongsToMany(Product, {through:"product_color"})



//ej: Activity.belongsToMany(Country, {through:"activity_country"})
//ej: Country.belongsToMany(Activity, {through:"activity_country"})


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };