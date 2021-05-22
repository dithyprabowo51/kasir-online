'use strict';
const {
  Model
} = require('sequelize');

const { hashing } = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Full name field cannot be empty' },
        notEmpty: { msg: 'Full name field cannot be empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'Email has been used' },
      validate: {
        notNull: { msg: 'Email field cannot be empty' },
        notEmpty: { msg: 'Email field cannot be empty' }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Role field cannot be empty' },
        notEmpty: { msg: 'Role field cannot be empty' }
      }
    },
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password field cannot be empty' },
        notEmpty: { msg: 'Password field cannot be empty' }
      }
    }
  }, {
    hooks: {
      beforeCreate: employee => {
        const passwordHashed = hashing(employee.password)
        employee.password = passwordHashed
      }
    },
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};