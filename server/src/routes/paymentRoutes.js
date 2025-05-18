const router = require('express').Router();
const payController = require('../controllers/paymentController');

router.get('/', payController.getAll);
router.get('/:id', payController.getById);
router.post('/', payController.create);
router.put('/:id', payController.update);
router.delete('/:id', payController.remove);

module.exports = router;
