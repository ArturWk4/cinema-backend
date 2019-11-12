const HttpStatus = require("http-status-codes");

const { createPassword } = require("../utils/password");
const { ROLE_USER } = require("../utils/constants");
const {
  validateLoginAndPassword,
  validateNewUser
} = require("../utils/validation");

const authService = require("../services/auth");
const userService = require("../services/user");

const login = role => async (req, res) => {
  const { login, password } = req.body;
  if (!validateLoginAndPassword(login, password)) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Login or passowrd don't match required format" });
  }
  const token = await authService.authenticate({ login, password, role });
  if (!token) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong username or password" });
  } else {
    res.status(HttpStatus.OK).json({ message: "Successful auth", token });
  }
};

const registration = async (req, res) => {
  const { firstName, surname, login, password } = req.body;
  if (!validateNewUser(firstName, surname, login, password)) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong data to add new user!" });
  }
  if (!(await userService.getUserByLogin(login))) {
    userService.addUser({
      firstName,
      surname,
      login,
      password: await createPassword(password),
      role: ROLE_USER
    });
    res
      .status(HttpStatus.CREATED)
      .json({ message: "Successfully add new user!" });
  } else {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Wrong data to add new user!" });
  }
};

module.exports = {
  login,
  registration
};
