'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Location_validations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      geo_x: {
        type: Sequelize.STRING
      },
      geo_y: {
        type: Sequelize.STRING
      },
      location_address: {
        type: Sequelize.STRING
      },
      location_keyword: {
        type: Sequelize.STRING
      },
      validated: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Location_validations');
  }
};