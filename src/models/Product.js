const { DataTypes } = require('sequelize');


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

      subCategory_id : {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
        
      },
      material_id : {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
        
      },

      /* ficha tenica */
      data_sheet: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0

      },

      images: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue:null

      }



      


    }, { timestamps: false });
  };