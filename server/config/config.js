const { config } = require("../serverConfig.js");

const development = {
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  dialect: config.db.rdbms,
  timezone: "Asia/Seoul",
};

const production = {
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  dialect: config.db.rdbms,
  timezone: "Asia/Seoul",
};

const test = {
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  dialect: config.db.rdbms,
  timezone: "Asia/Seoul",
};

module.exports = { development, production, test };
