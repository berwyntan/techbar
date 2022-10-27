const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/seed', userController.seedUser);

// router.get('/category/:category', userController.getProductsByCategory);

// router.get('/:id', userController.getProductById);

// router.get('/', userController.getAllProducts)

module.exports = router