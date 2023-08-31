const express = require('express');
const router = express.Router();
const { verifyEmail, verifyToken } = require('../middlewares/middlewares.js');
const { login, signup, mySession } = require('../controllers/user.controller.js');

router.post('/signup', verifyEmail, signup);

router.post('/login', login);

router.get('/my', verifyToken, mySession);

module.exports = router;