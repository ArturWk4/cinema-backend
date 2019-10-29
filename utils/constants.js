const PORT = process.env.port || 3000;
const BCRYPT_ROUNDS = 12;
const NAME_REGEX = /^[a-zA-Zа-яёА-ЯЁ]+$/;
const LOGIN_REGEX = /(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{2,19}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,100}$/;

module.exports = {
  PORT,
  BCRYPT_ROUNDS,
  NAME_REGEX,
  LOGIN_REGEX,
  PASSWORD_REGEX
};
