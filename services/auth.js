const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
const { EXPIRESIN_JWT, SECRET } = require("../utils/constants");
const { resolvePassword } = require("../utils/password");

const authenticate = async ({ login, password, role }) => {
  const user = await User.findOne({ where: { login } });
  const isResolvedPassword = await resolvePassword(password, user.password);
  if (!user || !isResolvedPassword || user.role !== role) {
    return null;
  } else {
    return (token = jwt.sign(
      { login, password: user.password, role, id: user.id },
      SECRET,
      { expiresIn: EXPIRESIN_JWT }
    ));
  }
};

module.exports = {
  authenticate
};
