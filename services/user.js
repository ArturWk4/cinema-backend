const userAccessor = require("../data-access/user");

const getUserByLogin = async login => {
  const user = await userAccessor.getUserByLogin({ where: { login } });
  return user || null;
};
const addUser = async user => {
  const userObj = userAccessor.addUser(user);
  return userObj || null;
};

module.exports = {
  getUserByLogin,
  addUser
};
