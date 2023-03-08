'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    
    static associate(models) {
      Enrollments.belongsTo(models.People, {
        foreignKey: 'student_id'
      })
      Enrollments.belongsTo(models.Classes, {
        foreignKey: 'class_id'
      })
    }
  }
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};