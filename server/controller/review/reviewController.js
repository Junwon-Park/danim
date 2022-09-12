const { Reviews } = require("../../models");

const uploadReviewController = async (req, res) => {
  // console.log(req.files); // router에서 single로 하면 req.file, router에서 array로 하면 req.files에 배열 형태로 온다.
  const reviewData = req.body;
  const reviewImageArray = req.files;
  const imageUrlArray = [];

  console.log("reviewData", reviewData);
  console.log('"reviewData"', reviewImageArray);

  reviewImageArray.forEach((imgObj) => {
    console.log("Obaject", imgObj);
    imageUrlArray.push(imgObj.location);
  });

  // const imageUrls = imageUrlArray.join(",");

  // const review = await Reviews.create({
  //   user_id: Number(reviewData.user_id),
  //   review_image: imageUrls,
  //   review_description: reviewData.description,
  // });

  // console.log("review!!!!", review);

  // const { id, user_id, review_image, review_description } = review;
  // const splitedImageUrl = review_image.split(",");

  // // const findRievew = await Reviews.findByPk(1);

  // // console.log("findRievew!!", findRievew.review_image.split(","));
  // res.json({
  //   data: { id, user_id, review_image: splitedImageUrl, review_description },
  // });
};

module.exports = { uploadReviewController };
