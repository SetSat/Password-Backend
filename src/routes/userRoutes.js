const express = require('express');
const { forgotPassword, resetPassword, signup } = require('../controllers/userController');

const router = express.Router();

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/newuser', signup)

module.exports = router;