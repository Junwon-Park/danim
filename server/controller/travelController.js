const { Travel_places, Local_specialties } = require("../models");

const getTravelDetailController = async (req, res) => {
  const travelId = req.body.travelId;

  const travelDetail = await Local_specialties.findAll({
    include: { model: Travel_places },
    where: { place_id: travelId },
  });

  res.json({ Message: "OK", data: { travelDetail } });
};

module.exports = { getTravelDetailController };
