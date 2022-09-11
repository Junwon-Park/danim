"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        account: "abc123",
        password: "12345",
        region_1: "서울",
        region_2: "신림동 89-1",
        user_name: "홍길동",
        user_phoneNumber: "010-1234-5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        account: "cba321",
        password: "12345",
        region_1: "서울",
        region_2: "홍제동 1-1",
        user_name: "장발장",
        user_phoneNumber: "010-1234-5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        account: "aab596",
        password: "12345",
        region_1: "안산시",
        region_2: "단원구 고잔동 1",
        user_name: "한석봉",
        user_phoneNumber: "010-1234-5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
