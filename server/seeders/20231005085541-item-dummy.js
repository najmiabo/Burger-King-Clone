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
    const items = [
      {
        name: 'Cheese Burger',
        description: 'Burger dengan tambahan keju',
        price: 18000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/2/danmkztstgiprrjwcn5zht_product_details.jpg',
        authorId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken Burger',
        description: 'Burger dengan isi ayam krispi',
        price: 18000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/10/2/dntfbsfxmbsv9qudfqyqcs_product_details.jpg',
        authorId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angus Burger',
        description: 'Burger dengan saus BBQ ala australia',
        price: 69000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/mapxcrjtekfnfrfr3uotrz_product_details.jpg',
        authorId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spicy Chicken',
        description: 'Ayam dengan baluran bumbu pedas',
        price: 18000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/group_photo/2023/6/3/bzilpvmecz3gmmngfan9vg_product_list.jpg',
        authorId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crispy Chicken',
        description: 'Ayam krispi original',
        price: 18000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/5/8/kdrkheurthqgh2vg3zprrf_product_list.jpg',
        authorId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fusion Cookies',
        description: 'Dessert es krim dengan topping cookies',
        price: 12000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/2/7/htwvxxeqrgcg54w4e3ert5_product_list.jpg',
        authorId: 1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate Pie',
        description: 'Dessert pie isi coklat',
        price: 12000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/ltgdwtqf78ldx2qxnct4qa_product_list.jpg',
        authorId: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coke Regular',
        description: 'Minuman soda kola',
        price: 10000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/zcfeahbcxwayqxcdbrncfz_product_list.jpg',
        authorId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lemon Tea',
        description: 'Teh lemon segar dingin',
        price: 16000,
        imgUrl: 'https://media-order.bkdelivery.co.id/thumb/product_photo/2023/3/20/agxkcyhdcbatygbhgbwbvr_product_list.jpg',
        authorId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Items', items)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {});
  }
};
