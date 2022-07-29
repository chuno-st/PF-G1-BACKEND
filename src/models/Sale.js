const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Sale', {

    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collector_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    sale_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    items: {
      type: DataTypes.STRING,  // [{}]
      allowNull: false,
    },
    operation_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
  }
    , { timestamps: true });
};