const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const { config } = require("./serverConfig");
const PORT = config.PORT;

const reviewRouter = require("./router/review/reviewRouter.js");

app.use(morgan("tiny"));
app.use(helmet());

// const whiteListByCors = [
//   'https://aws.amazon.com'
// ];

const corsOptions = {
  // origin: (origin, callback) => {
  //   if (whiteListByCors.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  origin: true,
  methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
};
const devCors = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(devCors));

app.get("/", (req, res) => {
  console.log(req.headers);
  res.status(200).send("connect!!!");
});

app.use("/review", reviewRouter);

server = app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT} successfully!!!`);
});
