"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Traveled_records", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      place_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      travel_infomation: {
        type: Sequelize.TEXT,
      },
      traveled_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Traveled_records");
  },
};
