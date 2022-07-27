const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      calle: {
        type: DataTypes.STRING,
        allowNull: true
      },
      direccion: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      piso: {
        type: DataTypes.STRING,
        allowNull: true
      },
      departamento: {
        type: DataTypes.STRING,
        allowNull: true
      },
      codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: true
      },
      localidad: {
        type: DataTypes.STRING,
        allowNull: true
      },
      telefono: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, { timestamps: true });
  };

