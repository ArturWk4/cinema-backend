const userAccessor = require("../data-access/user");

const getUserByLogin = async login => {
  const user = await userAccessor.getUserByLogin( login );
  return user || null;
};
const addUser = async user => {
  const userObj = await userAccessor.addUser(user);
  return userObj || null;
};

module.exports = {
  getUserByLogin,
  addUser
};
