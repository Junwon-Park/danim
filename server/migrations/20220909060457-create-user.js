"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      account: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      region_1: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      region_2: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      user_phoneNumber: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("Users");
  },
};
