const jwt = require("jsonwebtoken");
const User = require("../database/models/user");
const { EXPIRES_IN_JWT, SECRET } = process.env;
const { resolvePassword } = require("../utils/password");

const authenticate = async ({ login, password, role }) => {
  const user = await User.findOne({ where: { login } });
  const validPassword = await resolvePassword(password, user.password);
  if (!user || !validPassword || user.role !== role) {
    return null;
  } else {
    return (token = jwt.sign(
      { login, password: user.password, role, id: user.id },
      SECRET,
      { expiresIn: EXPIRES_IN_JWT }
    ));
  }
};

module.exports = {
  authenticate
};
