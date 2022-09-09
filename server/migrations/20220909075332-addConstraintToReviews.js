"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Reviews", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_reviews_fk",

      references: {
        table: "Users",
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
