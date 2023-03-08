module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Pessoas', [
			  {
				  name: 'Ana Souza',
				  active: true,
				  email: 'ana@ana.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  name: 'Marcos Cintra',
				  active: true,
				  email: 'marcos@marcos.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  name: 'Felipe Cardoso',
				  active: true,
				  email: 'felipe@felipe.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  name: 'Sandra Gomes',
				  active: false,
				  email: 'sandra@sandra.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  name: 'Paula Morais',
				  active: true,
				  email: 'paula@paula.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  name: 'Sergio Lopes',
				  active: true,
				  email: 'sergio@sergio.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  }
	  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Pessoas', null, {})
	}
  }
  