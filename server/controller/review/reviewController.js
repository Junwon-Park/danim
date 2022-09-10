// 리뷰 db 저장 컨트롤러 upLoadImage 미들웨어로 사진 s3 업로드 후 해당 이미지 url 까지 포함해서 db에 저장
// 사진은 review_images 테이블에 저장

const uploadReviewController = async (req, res) => {
  console.log(req.files); // router에서 single로 하면 req.file, router에서 array로 하면 req.files에 배열 형태로 온다.
  res.send("Good job!");
};

module.exports = { uploadReviewController };
