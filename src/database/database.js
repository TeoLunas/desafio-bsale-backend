const { createPool } = require('mysql2/promise');
const {config} = require('../config/config')

const pool = createPool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
});

module.exports = pool
