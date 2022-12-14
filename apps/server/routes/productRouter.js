const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/seed', productController.seedProduct);

router.get('/category/:category', productController.getProductsByCategory);

router.get('/category/one/:category', productController.getOneProductByCategory);

router.get('/:id', productController.getProductById);

router.get('/', productController.getAllProducts)

module.exports = router