const { DataTypes: dt } = require('sequelize');
const db = require('../config/sequelize.config.js');

const Booking = db.define('booking', {
    bookingID: {
        type: dt.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    totalValue: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }
})

module.exports = Booking;