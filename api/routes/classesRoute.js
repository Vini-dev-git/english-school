const { Router } = require('express');
const ClassesController = require('../controllers/ClassesControllers');

const router = Router();

router.get('/classes', ClassesController.catchAllClasses)
      .get('/classes/:id', ClassesController.takeOneClass)
      .post('/classes', ClassesController.createClass);

module.exports = router;