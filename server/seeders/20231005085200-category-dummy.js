'use strict';

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
    const categories = [
      {
        name: 'Burger',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dessert',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soft Drink',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Categories', categories)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
