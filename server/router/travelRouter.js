const express = require("express");
const router = express.Router();

const {
  getTravelDetailController,
  getAllTravelsController,
} = require("../controller/travelController");

router.get("/getTravelDetail", getTravelDetailController);
router.get("/getAllTravels", getAllTravelsController);

module.exports = router;
