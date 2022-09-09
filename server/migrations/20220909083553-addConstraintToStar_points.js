"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Star_points", {
      fields: ["record_id"],
      type: "foreign key",
      name: "traveled_records_Star_points_fk",

      references: {
        table: "Traveled_records",
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
