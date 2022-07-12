const { DataTypes, Model } = require('sequelize');




module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('Category', {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, { timestamps: false });
  };