// server/src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', ctrl.register);

// POST /api/auth/login
router.post('/login', ctrl.login);

module.exports = router;
