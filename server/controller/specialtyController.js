const { Travel_places } = require("../models");

const getTravelDetailController = async (req, res) => {
  const travelId = req.body.travelId;

  const travelDetail = await Travel_places.findAll({ where: travelId });

  res.json({ Message: "OK", data: { travelDetail } });
};

module.exports = { getTravelDetailController };
