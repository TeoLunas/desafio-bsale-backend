require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    dataBase: process.env.DB_NAME,
    dataBaseHost: process.env.BD_HOST,
    dataBaseUser: process.env.DB_USER,
    dataBasePassword: process.env.DB_PASSWORD
}