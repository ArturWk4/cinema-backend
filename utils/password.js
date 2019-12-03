const bcrypt = require("bcrypt");
const { BCRYPT_ROUNDS } = require("./constants");

const createPassword = password => bcrypt.hash(password, BCRYPT_ROUNDS);
const resolvePassword = (password, hash) => bcrypt.compare(password, hash);

module.exports = {
  createPassword,
  resolvePassword
};
