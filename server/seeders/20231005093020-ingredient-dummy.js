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
    const ingredients = [
      {
        itemId: 1,
        name: 'Roti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 1,
        name: 'Keju',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 1,
        name: 'Patty',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 2,
        name: 'Roti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 2,
        name: 'Ayam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 3,
        name: 'Roti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 3,
        name: 'Beef Rasher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 3,
        name: 'Tomat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 3,
        name: 'American Cheese',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 4,
        name: 'Ayam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 4,
        name: 'Saus Pedas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 4,
        name: 'Tepung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 5,
        name: 'Ayam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 5,
        name: 'Tepung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 6,
        name: 'Ice cream',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 6,
        name: 'Cookies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 7,
        name: 'Coklat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 8,
        name: 'Kola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 9,
        name: 'Teh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itemId: 9,
        name: 'Lemon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Ingredients', ingredients)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
