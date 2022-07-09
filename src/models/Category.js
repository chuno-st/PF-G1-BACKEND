const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category_id2: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, { timestamps: false });
  };