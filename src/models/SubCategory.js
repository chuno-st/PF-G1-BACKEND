const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('SubCategory', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subCategory_id: {
        type: DataTypes.INTEGER,

      }
    }, { timestamps: false });
  };