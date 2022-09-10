const dotenv = require("dotenv");
dotenv.config();

const required = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (value === null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
};

const config = {
  host: {
    port: parseInt(required("HOST_PORT", 8080)),
  },
  db: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    database: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
    rdbms: required("DB_RDBMS"),
  },
  PORT: required("PORT") || 8080,
};

module.exports = { config };
