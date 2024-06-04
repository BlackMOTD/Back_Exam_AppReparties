const {DataTypes} = require('sequelize');
const db = require('../db/dbconfig');

const Joke = db.define(
    'Joke', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        blague: {
             type: DataTypes.STRING,
             allowNull: false,
        },
        reponse: {
             type: DataTypes.INTEGER,
             allowNull: false,
        }

});

module.exports = Joke;