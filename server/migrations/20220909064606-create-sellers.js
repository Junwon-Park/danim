"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sellers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      specialty_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      seller_mutual: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      sales_url: {
        type: Sequelize.STRING(100),
      },
      seller_address: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sellers");
  },
};
