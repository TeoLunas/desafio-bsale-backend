const boom = require('@hapi/boom');
const { getAllProductsQuery, getOneProductQuery, getOneProductByNameQuery } = require('../database/database')


const getAllProducts = async () => {
        const products = await getAllProductsQuery();
        return products;
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
    const product = await getOneProductByNameQuery(productName);
    if (product.length === 0) {
        throw boom.notFound('No existen productos');
    }
    return product;
}

module.exports = {
    getAllProducts,
    getOneProductById,
    getOneProductByName
};
