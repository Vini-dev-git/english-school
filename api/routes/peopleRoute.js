const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.catchAllPeople)
      .get('/people/:id', PeopleController.takeAperson)
      .post('/people', PeopleController.creatPerson)
      .post('/people/:studentId/enrollment', PeopleController.createRegistration)
      .post('/people/:studentId/enrollment', PeopleController.createRegistration)
      .put('/people/:id', PeopleController.updatePerson)
      .put('/people/:studentId/enrollment/:enrollmentId', PeopleController.updateRegistration)
      .delete('/people/:id', PeopleController.deletePerson)
      .delete('/people/:studentId/enrollment/enrollmentId', PeopleController.deleteRegistration)
      .get('/people/:studentId/enrollment', PeopleController.takeAregistration);

module.exports = router;
