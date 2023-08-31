const { DataTypes: dt } = require('sequelize');
const db = require('../config/sequelize.config.js');

const Post = db.define('post', {
    postID: {
        type: dt.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product: {
        type: dt.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 35],
                msg: 'El largo del nombre debe medir entre 2 y 35 caracteres'
            }
        }
    },
    photo: {
        type: dt.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El largo de la foto debe medir entre 2 y 50 caracteres'
            }
        }
    },
    description: {
        type: dt.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 280],
                msg: 'El largo de la descripcion debe medir entre 2 y 280 caracteres'
            }
        }
    },
    initialStock: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    availableStock: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    price: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }
})

module.exports = Post;