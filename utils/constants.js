const BCRYPT_ROUNDS = 12;
const NAME_REGEX = /^[a-zA-Z]+$/;
const ROLE_USER = "USER";
const ROLE_ADMIN = "ADMIN";
const SECRET = "SECRET";
const EXPIRES_IN_JWT = 86400;

module.exports = {
  BCRYPT_ROUNDS,
  NAME_REGEX,
  ROLE_USER,
  ROLE_ADMIN,
  SECRET,
  EXPIRES_IN_JWT
};
