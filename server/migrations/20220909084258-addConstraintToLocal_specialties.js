"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Local_specialties", {
      fields: ["place_id"],
      type: "foreign key",
      name: "travel_places_Local_specialties_fk",

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
