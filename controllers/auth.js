const { createPassword } = require("../utils/password");
const { ROLE_USER, ROLE_ADMIN } = require("../utils/constants");
const {
  validateLoginAndPassword,
  validateNewUser
} = require("../utils/validation");

const authService = require("../services/auth");
const userService = require("../services/user");

const isUser = async (req, res, next) => {
  const user = await getUserByLogin(req.body.login);
  if (user.role === ROLE_USER) {
    next();
  } else {
    res.status(400).json({ message: "You are not user" }); // will replased by redirection
  }
};

const isAdmin = async (req, res, next) => {
  const user = await getUserByLogin(req.body.login);
  if (user.role === ROLE_ADMIN) {
    next();
  } else {
    res.status(403).json({ message: "You are not admin" });
  }
};

const login = async (req, res) => {
  const { login, password } = req.body;
  if (!validateLoginAndPassword(login, password)) {
    res
      .status(400)
      .json({ message: "Login or passowrd don't match required format" });
  }
  const token = await authService.authenticate({ login, password });
  if (!token) {
    res.status(400).json({ message: "Wrong username or password" });
  } else {
    res.status(200).json({ message: "Successful auth", token });
  }
};

const registration = async (req, res) => {
  const { firstName, surname, login, password } = req.body;
  if (!validateNewUser(firstName, surname, login, password)) {
    res.status(400).json({ message: "Wrong data to add new user!" });
  }
  if (!(await userService.getUserByLogin(login))) {
    userService.addUser({
      firstName,
      surname,
      login,
      password: await createPassword(password),
      role: ROLE_USER
    });
    res.status(201).json({ message: "Successfully add new user!" });
  } else {
    res.status(400).json({ message: "Wrong data to add new user!" });
  }
};

module.exports = {
  login,
  registration,
  isAdmin,
  isUser
};
