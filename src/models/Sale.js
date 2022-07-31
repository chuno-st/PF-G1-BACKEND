const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Sale', {

    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('approved','dispatch','ANULED'),
      defaultValue: "ANULED",
      allowNull: false,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    montoTotal: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
  }
    , { timestamps: true });
};