const Joi = require("joi");
const moment = require("moment");
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
  const validatedLoginAndPassword = validateLoginAndPassword(login, password);
  return !(error || !validatedLoginAndPassword);
};

const validateFilm = (title, description, duration, startsAt, endsAt) => {
  const startMoment = moment(startsAt, "YYYY-MM-DD", true);
  const endMoment = moment(endsAt, "YYYY-MM-DD", true);
  const durationMoment = moment(duration, "HH:mm:ss", true);
  return (
    title &&
    description &&
    durationMoment.isValid() &&
    startMoment.isValid() &&
    endMoment.isValid() &&
    endMoment.valueOf() > startMoment.valueOf()
  );
};

const validateService = (title, price) => {
  const schema = {
    title: Joi.string().required(),
    price: Joi.number()
      .positive()
      .required()
  };
  const { error } = Joi.validate({ title, price }, schema);
  return !error;
};

const validateSeat = (seatTypeId, xPos, yPos) => {
  const schema = {
    seatTypeId: Joi.required().positive(),
    xPos: Joi.required().positive(),
    yPos: Joi.required().positive()
  };
  const { error } = Joi.validate({ seatTypeId, xPos, yPos }, schema);
  return !error;
};

module.exports = {
  validateLoginAndPassword,
  validateNewUser,
  validateFilm,
  validateService,
  validateSeat
};
