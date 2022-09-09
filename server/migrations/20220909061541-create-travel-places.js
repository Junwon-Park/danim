'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Travel_places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place_name: {
        type: Sequelize.STRING
      },
      place_region1: {
        type: Sequelize.STRING
      },
      place_region2: {
        type: Sequelize.STRING
      },
      place_region3: {
        type: Sequelize.STRING
      },
      issued_place: {
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
    await queryInterface.dropTable('Travel_places');
  }
};