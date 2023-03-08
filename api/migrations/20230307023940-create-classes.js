'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacher_id: {
        allowNull: false,
        autoIncrement: false, 
        type: Sequelize.INTEGER,
        references: { model: 'People', key: 'id'}
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Levels', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};