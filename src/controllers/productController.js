const productService = require('../services/productService')

const getAllProducts = async(req, res, next) => {
    try {
        const { page } = 0 || req.query;
        const products = await productService.getAllProducts(page);
        res.json(products)
    } catch (error) {
        next(error)
    }
};

const getOneProductById = async(req, res) => {
    const { id } = req.params;
    const product = await productService.getOneProductById(id);
    res.status(200).json(product)
}

const searchProductByName = async(req, res, next) => {
    try {
        const { productName } = req.query;
        const product = await productService.getOneProductByName(productName);
        res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllProducts,
    getOneProductById,
    searchProductByName
};
