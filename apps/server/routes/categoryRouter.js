const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/seed', categoryController.seedCategory);

router.get('/', categoryController.getAllCategory);

module.exports = router