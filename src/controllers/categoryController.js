const categoryService = require('../services/categoryService');

const getAllCategories  = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories)
    } catch (error) {
        next(error)
    }
};

const getOneCategorie = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.getOneCategorie(id);
        res.json(category)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllCategories,
    getOneCategorie
}
