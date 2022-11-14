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
 */
router.get('/', productController.getAllProducts);
/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Products
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
 * /api/v1/products/search/?productName=cer:
 *   get:
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
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

module.exports = router;