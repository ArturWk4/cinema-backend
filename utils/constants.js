const PORT = process.env.port || 3000;
const BCRYPT_ROUNDS = 12;
const NAME_REGEX = /^[a-zA-Z]+$/;
const ROLE_USER = "USER";
const ROLE_ADMIN = "ADMIN";
const SECRET = "SECRET";
const EXPIRESIN_JWT = 86400;

module.exports = {
  PORT,
  BCRYPT_ROUNDS,
  NAME_REGEX,
  ROLE_USER,
  ROLE_ADMIN,
  SECRET,
  EXPIRESIN_JWT
};
