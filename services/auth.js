const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
const { EXPIRESIN_JWT, ROLE_USER, SECRET } = require("../utils/constants");
const { resolvePassword } = require("../utils/password");

const authenticate = async ({ login, password }) => {
  const user = await User.findOne({ where: { login } });
  if (
    !user ||
    !(await resolvePassword(password, user.password)) ||
    user.role !== ROLE_USER // will replaced by separated middleware
  ) {
    return null;
  } else {
    return (token = jwt.sign(
      { login, password: user.password, role: ROLE_USER, id: user.id },
      SECRET,
      { expiresIn: EXPIRESIN_JWT }
    ));
  }
};

module.exports = {
  authenticate
};
