const {
  sequelize,
  Travel_places,
  Place_images,
  Traveled_records,
} = require("../models");

const getTravelDetailController = async (req, res) => {
  const travelId = req.query.travelId;

  const travelDetail = await sequelize.query(
    `SELECT * FROM Travel_places tp JOIN Place_images pi2
    ON tp.id = pi2.place_id JOIN Local_specialties ls
    ON tp.id = ls.place_id JOIN Specialty_images si
    ON ls.id = si.specialty_id WHERE tp.id = ${travelId}`,
    { nest: true, type: sequelize.QueryTypes.SELECT }
  );

  res.json({ Message: "OK", data: { travelDetail } });
};

const getAllTravelsController = async (req, res) => {
  const allTravels = await Travel_places.findAll({
    include: [{ model: Place_images }],
  });

  res.json({ Message: "OK", data: allTravels });
};

const createTraveledRecord = async (req, res) => {
  const { id, place_id, user_id, place_description, traveled_date } = req.body;
  const insertedRecord = await Traveled_records.create({
    id,
    place_id,
    user_id,
    place_description,
    traveled_date,
  });
  console.log("resutl", insertedRecord);
  res.json({ Message: "OK" });
};

module.exports = {
  getTravelDetailController,
  getAllTravelsController,
  createTraveledRecord,
};
