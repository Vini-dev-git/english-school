const { Router } = require('express');
const LevelController = require('../controllers/LevelsController');

const router = Router();

router.get('/levels', LevelController.catchAllLevels)
      .get('/levels/:id', LevelController.takeOneLevel)
      .post('/levels', LevelController.createAlevel)
      .put('/levels/:id', LevelController.updateLevel)
      .delete('/levels/:id', LevelController.deleteLevel);

module.exports = router;
