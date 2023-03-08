'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Levels', [{
        descr_nivel: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        descr_nivel: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        descr_nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  // async down (queryInterface, Sequelize) {
    
  //     await queryInterface.bulkDelete('People', null, {});
     
  // }
};
