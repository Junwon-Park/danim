// 리뷰 db 저장 컨트롤러 upLoadImage 미들웨어로 사진 s3 업로드 후 해당 이미지 url 까지 포함해서 db에 저장
// 사진은 review_images 테이블에 저장

const uploadReviewController = async (req, res) => {
  console.log(req.file.location);
  res.send("Good job!");
};

module.exports = { uploadReviewController };
