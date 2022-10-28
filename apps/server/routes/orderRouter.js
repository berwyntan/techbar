const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/seed', orderController.seedOrder);

router.post('/', orderController.handleNewOrder);

router.get('/:user', orderController.getOrdersByUser);

module.exports = router