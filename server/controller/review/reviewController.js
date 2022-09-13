const { Reviews } = require("../../models");

const uploadReviewController = async (req, res) => {
  const reviewData = req.body;
  const reviewImageArray = req.files;
  const imageUrlArray = [];

  reviewImageArray.forEach((imgObj) => {
    imageUrlArray.push(imgObj.location);
  });

  const imageUrls = imageUrlArray.join(",");

  const review = await Reviews.create({
    user_id: Number(reviewData.user_id),
    review_image: imageUrls,
    review_description: reviewData.description,
  });

  const { id, user_id, review_image, review_description } = review;
  const splitedImageUrl = review_image.split(",");

  // const findRievew = await Reviews.findByPk(1);

  // console.log("findRievew!!", findRievew.review_image.split(","));
  res.json({
    data: { id, user_id, review_image: splitedImageUrl, review_description },
  });
};

const getAllReviewController = async (req, res) => {
  const AllReviews = await Reviews.findAll();

  console.log(AllReviews);
  res.json({ data: AllReviews });
};

module.exports = { uploadReviewController, getAllReviewController };
