const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const { config } = require("./serverConfig");
const PORT = config.PORT;

// Import Router
const reviewRouter = require("./router/reviewRouter.js");
const travelRouter = require("./router/travelRouter.js");

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
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.headers);
  res.status(200).send("connect!!!");
});

// Router
app.use("/review", reviewRouter);
app.use("/travel", travelRouter);

server = app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT} successfully!!!`);
});
