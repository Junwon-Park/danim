const express = require("express");
const router = express.Router();

const {
  uploadReviewController,
  getAllReviewController,
} = require("../controller/reviewController.js");

const upload = require("../middleware/review/uploadImage.js");

router.get("/getAllReviews", getAllReviewController);
router.post("/createReview", upload.array("image", 4), uploadReviewController);

module.exports = router;
