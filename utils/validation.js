const { NAME_REGEX, LOGIN_REGEX, PASSWORD_REGEX } = require("./constants");

const validateLoginAndPassword = (login, password) => {
  return (
    login &&
    password &&
    login.match(LOGIN_REGEX) &&
    password.match(PASSWORD_REGEX)
  );
};

const validateNewUser = (firstName, surname, login, password) => {
  return (
    validateLoginAndPassword(login, password) &&
    firstName &&
    surname &&
    firstName.length > 2 &&
    firstName.length < 32 &&
    firstName.match(NAME_REGEX) &&
    surname.length > 2 &&
    surname.length < 32 &&
    surname.match(NAME_REGEX)
  );
};

module.exports = {
  validateLoginAndPassword,
  validateNewUser
};
