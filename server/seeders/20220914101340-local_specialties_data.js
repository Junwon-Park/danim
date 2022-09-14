"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Local_specialties", [
      {
        place_id: 1,
        specialty_name: "기장 미역",
        specialty_description:
          "궁중 진상품인 기장미역은 세종실록 지리지를 비롯한 옛 문헌에 궁중 진상품으로 사용된 기록이 남아 있습니다.\n옛날부터 맛과 품질을 인정했으며, 현재 부산을 비롯해 세계적으로도 기장미역의 품질을 인정하고 있습니다.\n부산광역시에서 인증받은 미역으로 기장 미역/다시마 특구로 지정받기도 했습니다.\n또한 깐깐하기로 소문난 청와대에 기장미역이 선정되어 납품되기도 하며, 품질에 대한 인증을 받았습니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 1,
        specialty_name: "기장 멸치",
        specialty_description:
          "멸치는 우리 나라 전역에서 고루 잡히고 있는데, 봄에 연안 가까이 들어왔다가 가을에 남쪽바다 멀리 이동하여 겨울을 보내고 봄에 다시 연안으로 들어오는 습성이 있습니다.\n기장에서 잡히는 멸치는 산란기에 달한 길이 10∼15㎝ 사이의 왕멸치로 지방질이 풍부한 봄멸치가 주류를 이루고 있으며, 특히 전국 유자망 멸치 어획고의 60%를 차지하는 하는 까닭에 유명해진 것입니다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 1,
        specialty_name: "장안 흑미",
        specialty_description:
          "보통 색깔이 검어 흑미라 불리는 검정쌀은 일반미보다 각종 영양소가 많이 함유되어 있다.\n검정쌀을 백미에 10%정도 혼합하여 밥을 짓거나 죽을 끓이면 좋은데 두통, 빈혈, 백발예방 및 치료, 눈병, 고혈압, 당뇨병, 이뇨증, 변비증,심혈관 등의 질병에 효과가 있으며 빈혈증상이 있는 임산부와 어린아이에게 좋다.\n특히 검정쌀밥은 고운 밥색깔과 고소한 향 그리고 쫄깃한 질감으로 밥맛을 한층 배가시킨다.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 2,
        specialty_name: "여수 양파",
        specialty_description: "여수 양파 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 2,
        specialty_name: "여수 마늘",
        specialty_description: "여수 마늘 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 2,
        specialty_name: "여수 뻘낙지",
        specialty_description: "여수 뻘낙지 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 3,
        specialty_name: "의령 망개떡",
        specialty_description: "의령 망개떡 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 3,
        specialty_name: "의령 조청유과",
        specialty_description: "의령 조청유과 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        place_id: 3,
        specialty_name: "의령 수박",
        specialty_description: "의령 수박 냠냠",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
