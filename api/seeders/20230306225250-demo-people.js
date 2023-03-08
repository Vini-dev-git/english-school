'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        active: true,
        email: 'email@email.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Alladin',
        active: true,
        email: 'aladin@email.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Jhon O`Connor',
        active: true,
        email: 'jhon@email.com',
        role: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Et Bilu',
        active: true,
        email: 'etbilu@email.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Jhon Snow',
        active: true,
        email: 'snow@email.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Estudante legal',
        active: true,
        email: 'estudante@email.com',
        role: 'Estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Professor Legal',
        active: true,
        email: 'professor@email.com',
        role: 'Professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('People', null, {});
     
  }
};
