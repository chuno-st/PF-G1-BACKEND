const { DataTypes, Model } = require('sequelize');


module.exports = (sequelize) => {
 
    // defino el modelo
    sequelize.define('Product', {

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      product_id : {
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
        },

      /* ficha tenica */
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
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

      }



      


    }, { timestamps: true });
  };