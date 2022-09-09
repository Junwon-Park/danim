"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Specialty_images", {
      fields: ["specialty_id"],
      type: "foreign key",
      name: "local_specialties_specialty_images_fk",

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
