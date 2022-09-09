"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Sellers", {
      fields: ["specialty_id"],
      type: "foreign key",
      name: "local_specialties_sellers_fk",

      references: {
        table: "Local_specialties",
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
