const { createPool } = require('mysql2/promise');
const config = require('../config/config');

const pool = createPool({
    host: '',
    user: '',
    password: '',
    port: 3306,
    database: ''
});

const getAllProductsQuery = async (offset, row_count) => {
    // const [rows, fields] = await pool.execute('SELECT * FROM product LIMIT ?, ?', [offset,row_count]);
    const [rows, fields] = await pool.execute('SELECT * FROM product LIMIT ?, ?', [0,2]);
    return rows
};

const getOneProductQuery = async(id) => {
    const [rows] = await pool.execute('SELECT * FROM product WHERE id = ?', [id]);
    return rows;
};

const getOneProductByNameQuery = async(productName) => {
    const [ rows ] = await pool.execute('SELECT * FROM product WHERE name LIKE ?', ['%' + productName + '%']);
    return rows
}


module.exports = { getAllProductsQuery, getOneProductQuery, getOneProductByNameQuery };