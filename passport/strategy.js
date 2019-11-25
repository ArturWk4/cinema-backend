const { ExtractJwt, Strategy } = require("passport-jwt");
const { SECRET, ROLE_ADMIN } = require("../utils/constants");
const { getUserByLogin } = require("../services/user");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET,
  passReqToCallback: true
};

module.exports = new Strategy(
  options,
  async (req, { login, password, role, id }, done) => {
    if (!role || !password) {
      return done(null, false);
    }
    const { userId } = req.query;
    const user = await getUserByLogin(login);
    if (
      !user ||
      password !== user.password ||
      user.role != role ||
      (req.originalUrl.includes("/admin/") && user.role !== ROLE_ADMIN) ||
      (userId && id !== +userId)
    ) {
      return done(null, false);
    }
    return done(null, true);
  }
);
