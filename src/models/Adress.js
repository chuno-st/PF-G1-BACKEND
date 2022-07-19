const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('Adress', {
        adress_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    }, { timestamps: false });
};