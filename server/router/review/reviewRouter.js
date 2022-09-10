const express = require("express");
const router = express.Router();

const {
  uploadReviewController,
} = require("../../controller/review/reviewController.js");

const upload = require("../../middleware/review/uploadImage.js");

router.post("/", upload.single("image"), uploadReviewController);

module.exports = router;
