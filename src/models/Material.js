const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Material', {
      material_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hardness: {
        type: DataTypes.ENUM("1","2","3","4","5","6","7"),
        allowNull: false,
        defaultValue: "1",
      },
      purity: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false
      },
      state:{
        type: DataTypes.BOOLEAN,
        default: true,
       }

    }, { timestamps: false });
  };