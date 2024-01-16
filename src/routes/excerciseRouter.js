const express = require('express');
const router = express.Router();
const ExcerciseController = require('../controllers/ExcerciseController');

router.get('/:id', ExcerciseController.getById);
router.put('/:id', ExcerciseController.update);
router.delete('/:id', ExcerciseController.delete);
router.post('/', ExcerciseController.create);
router.get('/', ExcerciseController.getAll);

module.exports = router;