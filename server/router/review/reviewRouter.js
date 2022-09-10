const express = require("express");
const router = express.Router();

const {
  uploadReviewController,
} = require("../../controller/review/reviewController.js");

const upload = require("../../middleware/review/uploadImage.js");

router.post("/", upload.array("image", 4), uploadReviewController);

module.exports = router;
