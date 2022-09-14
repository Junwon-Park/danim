"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Place_images", [
      {
        place_id: 1,
        place_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/Place_images/kyeongnam/marinecity.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 2,
        place_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/Place_images/jeonnam/baekya.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 3,
        place_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/Place_images/kyeongnam/jeongamru.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
