"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Specialty_images", [
      {
        specialty_id: 1,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Haeundae/gijangmiyeok.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 2,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Haeundae/gijangmyeolchi.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 3,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Haeundae/gijangheukmi.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 4,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Yeosu/yeosuonion.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 5,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Yeosu/yeosumaneul.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 6,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Yeosu/nakji.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 7,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Uiryeong/manggaeddeok.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 8,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Uiryeong/uiryeongjochungyugwa.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specialty_id: 9,
        specialty_image:
          "https://danim-image-bucket.s3.ap-northeast-2.amazonaws.com/specialty_images/Uiryeong/uireongwatermelon.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
