const { DataTypes, Model } = require('sequelize');


module.exports = (sequelize) => {
 
    // defino el modelo
    sequelize.define('Product', {
      
      product_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: null
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:null

      },state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
       },
       stock: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0,
         validate: { checkCant(value) {
          if (value < 0 ) {
            throw new Error("no puede haber menos de 0");
          }
        } },
       },
    }, { timestamps: false });
  };