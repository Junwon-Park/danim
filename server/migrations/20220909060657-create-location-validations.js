"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Location_validations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      geo_x: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      geo_y: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      location_address: {
        type: Sequelize.STRING(30),
      },
      validated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    await queryInterface.dropTable("Location_validations");
  },
};
