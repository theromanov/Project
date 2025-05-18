const router = require('express').Router();
const authorController = require('../controllers/authorController');

// Отримати всіх авторів
router.get('/', authorController.getAll);

// Отримати одного автора за ID
router.get('/:id', authorController.getById);

// Створити нового автора
router.post('/', authorController.create);

// Оновити інформацію про автора
router.put('/:id', authorController.update);

// Видалити автора
router.delete('/:id', authorController.remove);

module.exports = router;
