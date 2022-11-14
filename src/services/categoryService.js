const boom = require('@hapi/boom');
const pool = require('../database/database');

/**
 * Funcion para obtener todas las categorias
 */
const getAllCategories =  async () => {
    const query = 'SELECT * FROM category';
    const [rows] = await pool.execute(query);
    return rows;
};

/**
 * Funcion para obtener todos los productos de una categoria 
 * Parametro id, es el id de la categoria
 * */
const getOneCategorie = async(id) => {
    const query = 'SELECT * FROM product WHERE category = ?'
    const [rows] = await pool.execute(query, [id]);
    if(rows.length === 0){
        throw boom.notFound('No existe esa categoria')
    }
    return rows;
}

module.exports = {
    getAllCategories, 
    getOneCategorie
}