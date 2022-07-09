const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('SubCategory', {
      subCategory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, { timestamps: false });
  };