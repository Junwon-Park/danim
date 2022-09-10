"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Travel_places", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      place_name: {
        type: Sequelize.STRING(10),
      },
      place_region1: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      place_region2: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      place_region3: {
        type: Sequelize.STRING(35),
      },
      issued_place: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      location_keyword: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable("Travel_places");
  },
};
