const express = require("express");
const router = express.Router();

const { test } = require("../../controller/test/test.js");
console.log(test);

router.get("/", test);

module.exports = router;
