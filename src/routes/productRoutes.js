const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:productName', productController.searchProductByName)

module.exports = router;