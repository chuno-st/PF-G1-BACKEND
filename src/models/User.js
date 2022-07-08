const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      telephone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      postal_code: {
        type: DataTypes.STRING,
        allowNull: false
      },

      country: {
        type: DataTypes.STRING,
        allowNull: false
      }


      
    }, { timestamps: true });
  };
