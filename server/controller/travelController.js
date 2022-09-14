const { sequelize } = require("../models");

const getTravelDetailController = async (req, res) => {
  const travelId = req.body.travelId;

  const travelDetail = await sequelize.query(
    `SELECT * FROM Travel_places tp JOIN Place_images pi2 
    ON tp.id = pi2.place_id JOIN Local_specialties ls 
    ON tp.id = ls.place_id JOIN Specialty_images si 
    ON ls.id = si.specialty_id WHERE tp.id = ${travelId}`,
    { nest: true, type: sequelize.QueryTypes.SELECT }
  );

  res.json({ Message: "OK", data: { travelDetail } });
};

module.exports = { getTravelDetailController };
