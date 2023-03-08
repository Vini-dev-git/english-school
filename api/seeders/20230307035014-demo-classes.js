'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Classes', [
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
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
