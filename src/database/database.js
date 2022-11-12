const { createPool } = require('mysql2/promise');
const {config} = require('../config/config');
require("dotenv").config();

const pool = createPool({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    port: 3306,
    database: 'bsale_test'
});

// const pool = createPool({
//     host: config.dbHost,
//     user: config.dbUser,
//     password: config.dbPassword,
//     database: config.dbName
// });

// Products querys
const getAllProductsQuery = async (offset, row_count) => {
    // const [rows, fields] = await pool.execute('SELECT * FROM product LIMIT ?, ?', [offset,row_count]);
    const [rows, fields] = await pool.execute('SELECT * FROM product LIMIT ?, ?', [0, 10]);
    return rows
};

const getOneProductQuery = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM product WHERE id = ?', [id]);
    return rows;
};

const getOneProductByNameQuery = async (productName) => {
    const [rows] = await pool.execute('SELECT * FROM product WHERE name LIKE ?', ['%' + productName + '%']);
    return rows
};

// Caegory Querys

const getCategories = async () => {
    const [rows] = await pool.execute('SELECT * FROM category');
    return rows;
};

const getCategoryProducts = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM product WHERE category = ?', [id]);
    return rows
};


module.exports = {
    getAllProductsQuery,
    getOneProductQuery,
    getOneProductByNameQuery,
    getCategories,
    getCategoryProducts
};