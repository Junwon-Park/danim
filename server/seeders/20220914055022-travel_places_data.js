"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Travel_places", [
      {
        place_name: "마린시티",
        place_region1: "부산광역시",
        place_region2: " 해운대구",
        place_region3: " 우3동",
        place_description: "마린시티 짱입니다.",
        issued_place: true,
        location_keyword: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_name: "백야등대",
        place_region1: "전남",
        place_region2: " 여수시 화정면 ",
        place_region3: "백야등대길 48",
        place_description: "백야등대는 정말 짱입니다.",
        issued_place: false,
        location_keyword: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_name: "정암루",
        place_region1: "경남",
        place_region2: "의령군 의령읍",
        place_region3: "남강로 686 정암루",
        place_description: "정암루는 최고입니다.",
        issued_place: true,
        location_keyword: null,
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
