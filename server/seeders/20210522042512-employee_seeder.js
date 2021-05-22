'use strict';

const { hashing } = require('../helpers/bcrypt.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Employees', [{
      fullname: 'Admin',
      email: 'admin@gmail.com',
      role: 'admin',
      phone: '081234567891',
      city: 'Sumedang',
      password: hashing('123456'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Employees', null, {})
  }
};
