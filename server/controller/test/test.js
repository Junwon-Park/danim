const test = async (req, res) => {
  console.log("test controller!");
  res.send("Good job!");
};

module.exports = { test };
