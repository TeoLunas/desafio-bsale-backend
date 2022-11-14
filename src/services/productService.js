const boom = require('@hapi/boom');
const pool = require('../database/database')

const getAllProducts = async (page) => {
        const query = 'SELECT * FROM product LIMIT ?, ?';
        const queryCount = 'SELECT COUNT(name)AS cantidad FROM product'
        const PAGE_SIZE = 10;
        const PAGE = page || 1;
        const offset = (PAGE - 1 ) * PAGE_SIZE;
        const [ row ] = await pool.execute(queryCount);
        const totalPages = row[0].cantidad / PAGE_SIZE;
        // const products = await getAllProductsQuery();
        // return products
        // const [rows, fields] = await pool.execute(query, [page, PAGE_SIZE]);
        const [rows, fields] = await pool.execute(query, [offset, PAGE_SIZE]);
        return {
            totalPages: Math.ceil(totalPages),
            page: PAGE,
            rows,
        };
};


const getOneProductByName = async (productName) => {
    const query = 'SELECT * FROM product WHERE name LIKE ?'
    const [rows] = await pool.execute(query, ['%' + productName + '%']);
    if (rows.length === 0) {
        throw boom.notFound('No existen productos');
    }
    return rows;
}

module.exports = {
    getAllProducts,
    getOneProductByName
};
