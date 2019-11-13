const Joi = require("joi");
const { NAME_REGEX } = require("./constants");

const validateLoginAndPassword = (login, password) => {
  const schema = {
    login: Joi.string()
      .min(2)
      .required(),
    password: Joi.string()
      .min(8)
      .max(100)
      .required()
  };
  const { error } = Joi.validate({ login, password }, schema);
  return !error;
};

const validateNewUser = (firstName, surname, login, password) => {
  const schema = {
    firstName: Joi.string()
      .regex(NAME_REGEX)
      .required(),
    surname: Joi.string()
      .regex(NAME_REGEX)
      .required()
  };
  const { error } = Joi.validate({ firstName, surname }, schema);
  return !(error || !validateLoginAndPassword(login, password))
};

module.exports = {
  validateLoginAndPassword,
  validateNewUser
};
