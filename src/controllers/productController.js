const getAllProducts = (req, res) => {
    res.json({msg: 'Get all products'})
};

const getOneProduct = (req, res) => {
    res.json({msg: 'Get One Product'})
}

module.exports = {
    getAllProducts,
    getOneProduct
};
