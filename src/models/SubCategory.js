const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('SubCategory', {
      subCategory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state:{
        type: DataTypes.BOOLEAN,
        default: true,
       }
    }, { timestamps: false });
  };