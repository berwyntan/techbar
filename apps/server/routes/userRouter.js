const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/seed', userController.seedUser);

router.post('/signup', userController.handleSignup);

router.post('/login', userController.handleLogin);

router.get('/logout', userController.handleLogout);

router.get('/refresh', userController.handleRefresh);

module.exports = router