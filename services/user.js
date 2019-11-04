const sequelize = require("../database/connection");
const { User } = require("../database/models");

const addUser = async user => User.create(user);
const getUserByLogin = async login => User.findOne({ where: { login } });

module.exports = {
  addUser,
  getUserByLogin
};
