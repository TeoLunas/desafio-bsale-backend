const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id: 
 *           type: integer
 *           example: 1
 *         name: 
 *           type: string
 *           example: ENERGETICA MR BIG 
 *         url_image:
 *           type: string
 *           example: https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg
 *         price:
 *           type: integer
 *           example: 1490
 *         discount:
 *           type: integer
 *           example: 29       
 *         category:
 *           type: integer
 *           example: 1 
 *     ProductNotFound:
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
 *           example: No existen productos
 */
router.get('/', productController.getAllProducts);
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *          type: integer
 *         description: Numero de la pagina, este parametro es opcional, ya que por defecto muestra la pagina 1
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
 *                     $ref: "#/components/schemas/Product"
 *                      
 */
router.get('/search', productController.searchProductByName)
/**
 * @openapi
 * /api/v1/products/search/?productName={productName}:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: productName
 *         schema:
 *          type: string
 *         description: Nombre del producto o parte del nombre
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
 *                     $ref: "#/components/schemas/Product"
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
 *                     $ref: "#/components/schemas/ProductNotFound"
 *                      
 */

module.exports = router;