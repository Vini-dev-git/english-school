const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.catchAllPeople)
      .get('/people/:id', PeopleController.takeAperson)
      .post('/people', PeopleController.creatPerson)
      .put('/people/:id', PeopleController.updatePerson)
      .delete('/people/:id', PeopleController.deletePerson)
      .get('/people/:studentId/enrollment/:enrollmentId', PeopleController.takeAregistration);

module.exports = router;
