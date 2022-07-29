const { DataTypes, Model } = require('sequelize');



module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('Color', {
      color_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
       }
    }, { timestamps: false });
  };