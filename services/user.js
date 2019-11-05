const { User } = require("../database/models");

const getUserByLogin = async login => User.findOne({ where: { login } });
const addUser = async user => User.create(user);

module.exports = {
  getUserByLogin,
  addUser
};
