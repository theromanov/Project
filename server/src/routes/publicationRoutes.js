const router = require('express').Router();
const publicationController = require('../controllers/publicationController');

// Get all publications
router.get('/', publicationController.getAll);

// Get one by id
router.get('/:id', publicationController.getById);

// Create new
router.post('/', publicationController.create);

// Update by id
router.put('/:id', publicationController.update);

// Delete by id
router.delete('/:id', publicationController.remove);

module.exports = router;
