// 사진 업로드 미들웨어
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/../../uploadConfig/s3.json");

require("dotenv").config();
const env = process.env;

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: env.BUCKETNAME,
    acl: "public-read-write",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      console.log("Multer file", file.originalname);
      cb(null, `reviews/${Date.now()}_${file.originalname}`);
      // file.originalname -> 클라이언트가 보낸 요청의 해당 파일의 이름이 넘어온 것이다.
      // reviews를 붙이면 S3에 reviews 디렉토리에 저장하고 디렉토리가 없다면 자동으로 생성하고 해당 디렉토리 안에 파일을 저장한다.
    },
  }),
});

module.exports = upload;
