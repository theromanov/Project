const router = require('express').Router();
const subController = require('../controllers/subscriptionController');

router.get('/', subController.getAll);
router.get('/:id', subController.getById);
router.post('/', subController.create);
router.put('/:id', subController.update);
router.delete('/:id', subController.remove);

module.exports = router;
