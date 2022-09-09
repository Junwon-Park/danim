"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Traveled_records", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_traveled_records_fk",

      references: {
        table: "Users",
        field: "id",
      },

      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Traveled_records", {
      fields: ["place_id"],
      type: "foreign key",
      name: "travel_places_traveled_records_fk",

      references: {
        table: "Travel_places",
        field: "id",
      },

      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
