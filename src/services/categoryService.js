const boom = require('@hapi/boom');
const pool = require('../database/database');

/**
 * Funcion para obtener todas las categorias
 */
const getAllCategories =  async () => {
    const [rows] = await pool.execute('SELECT * FROM category');
    return rows;
};

/**
 * Funcion para obtener todos los productos de una categoria 
 * Parametro id, es el id de la categoria
 * */
const getOneCategorie = async(id) => {
    const category = await getCategoryProducts(id);
    if(category.length === 0){
        throw boom.notFound('No existe esa categoria')
    }
    return category;
}

module.exports = {
    getAllCategories, 
    getOneCategorie
}