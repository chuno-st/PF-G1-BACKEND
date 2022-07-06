const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('item', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, { timestamps: false });
  };