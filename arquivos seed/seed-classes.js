module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Turmas', [
			{
				start_date: "2020-02-01",
				level_id: 1,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				start_date: "2020-02-01",
				level_id: 2,
				teacher_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				start_date: "2020-02-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				start_date: "2020-07-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Turmas', null, {})
  }
}
