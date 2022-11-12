require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.BD_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
}