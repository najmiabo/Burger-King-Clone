'use strict';

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = [
      {
        username: 'admin1',
        email: 'admin1@mail.com',
        password: hashPassword('12345'),
        role: 'Admin',
        phoneNumber: '087278767236',
        address: 'jalan kenangan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin2',
        email: 'admin2@mail.com',
        password: hashPassword('12345'),
        role: 'Admin',
        phoneNumber: '087382763723',
        address: 'jalan yang pernah ada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Users', users)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
