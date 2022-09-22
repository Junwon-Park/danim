const express = require("express");
const router = express.Router();

const {
  getTravelDetailController,
  getAllTravelsController,
  createTraveledRecord,
} = require("../controller/travelController");

router.get("/getTravelDetail", getTravelDetailController);
router.get("/getAllTravels", getAllTravelsController);
router.post("/createTraveledRecord", createTraveledRecord);

module.exports = router;
