const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

async function syncDB() {
    try {
        await db.authenticate()
        console.log('Connections has been established successfully');
    } catch (error) {
        console.error('Unable to connect to database', error)
    }
}

syncDB()

module.exports = db;