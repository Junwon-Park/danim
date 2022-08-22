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
  jwt: {
    accessKey: required("JWT_ACCESS"),
    refreshKey: required("JWT_REFRESH"),
    accExpiresIn: required("JWT_EXPIRES_ACCESS", "7d"),
    refExpiresIn: required("JWT_EXPIRES_REFRESH", "30d"),
  },
  bcrypt: {
    saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 12)),
  },
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
  oAuth: {
    google: {
      clientId: required("CLIENT_ID"),
      clientSecret: required("CLIENT_SECRET"),
      grantType: required("GRANT_TYPE"),
    },
  },
  redirectUrl: required("REDIRECT_URL"),
  PORT: required("PORT") || 8080,
};

module.exports = { config };
