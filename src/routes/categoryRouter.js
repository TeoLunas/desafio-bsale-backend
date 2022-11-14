const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');


/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 1
 *         name: 
 *           type: string
 *           example: bebida energetica
 *     CategoryAndProducts:
 *       type: object
 *       properties:
 *         statusCode: 
 *           type: integer
 *           example: 404
 *         error: 
 *           type: string
 *           example: Not Found 
 *         message:
 *           type: string
 *           example: No existen Categorias
 */
router.get('/', categoryController.getAllCategories);
/**
 * @openapi
 * /api/v1/category:
 *   get:
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Category"
 *                      
 */
router.get('/:id', categoryController.getOneCategorie);
/**
 * @openapi
 * /api/v1/category/{id}:
 *   get:
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         description: Id de la categoria, buscara la categoria y todos sus productos asociados
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Category"
 *       400:
 *         description: No se encontraron coincidencias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/CategoryAndProducts"
 *                      
 */

module.exports = router;