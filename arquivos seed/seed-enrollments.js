module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Matriculas', [
			  {
				  status: "confirmado",
				  student_id: 1,
				  class_id: 1,
				  createdAt: new Date(),
				  updatedAt: new Date()
		  },
		  {
			  status: "confirmado",
			  student_id: 2,
			  class_id: 1,
			  createdAt: new Date(),
			  updatedAt: new Date()
	  },
		  {
			  status: "confirmado",
			  student_id: 3,
			  class_id: 2,
			  createdAt: new Date(),
			  updatedAt: new Date()
	  },
		  {
			  status: "confirmado",
			  student_id: 4,
			  class_id: 3,
			  createdAt: new Date(),
			  updatedAt: new Date()
	  },
		  {
			  status: "cancelado",
			  student_id: 1,
			  class_id: 2,
			  createdAt: new Date(),
			  updatedAt: new Date()
	  },
		  {
			  status: "cancelado",
			  student_id: 2,
			  class_id: 2,
			  createdAt: new Date(),
			  updatedAt: new Date()
		  }
		  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Matriculas', null, {})
	}
  }
  