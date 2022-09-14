const express = require("express");
const router = express.Router();

const { getTravelDetailController } = require("../controller/travelController");

router.get("/getTravelDetail", getTravelDetailController);

module.exports = router;
