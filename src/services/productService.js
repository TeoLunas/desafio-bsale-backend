const boom = require('@hapi/boom');
const pool = require('../database/database')

const getAllProducts = async (page) => {
        const query = 'SELECT * FROM product';
        const queryCount = 'SELECT COUNT(name)AS cantidad FROM product'
        const PAGE_SIZE = 2;
        const [ row ] = await pool.execute(queryCount);
        const totalPages = row[0].cantidad / PAGE_SIZE;
        // const products = await getAllProductsQuery();
        // return products
        // const [rows, fields] = await pool.execute(query, [page, PAGE_SIZE]);
        const [rows, fields] = await pool.execute(query);
        return {
            totalPages,
            page: 1,
            rows,
        };
};

const getOneProductById = async (id) => {
    try {
        console.log(id)
        const product = await getOneProductQuery(id);
        return product;
    } catch (error) {
        return error
    }
}

const getOneProductByName = async (productName) => {
    const [rows] = await pool.execute('SELECT * FROM product WHERE name LIKE ?', ['%' + productName + '%']);
    if (rows.length === 0) {
        throw boom.notFound('No existen productos');
    }
    return rows;
}

module.exports = {
    getAllProducts,
    getOneProductById,
    getOneProductByName
};
