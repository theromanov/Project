// server/src/routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authorController');

// GET    /api/authors
router.get('/', ctrl.getAll);
// GET    /api/authors/:id
router.get('/:id', ctrl.getById);
// POST   /api/authors
router.post('/', ctrl.create);
// PUT    /api/authors/:id
router.put('/:id', ctrl.update);
// DELETE /api/authors/:id
router.delete('/:id', ctrl.remove);

module.exports = router;
