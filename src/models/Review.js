const { DataTypes, Model } = require('sequelize');



module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('Review', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, { timestamps: true });
  };