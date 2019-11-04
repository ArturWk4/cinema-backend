const jwt = require("jsonwebtoken");
const { createPassword } = require("../utils/password");

const authService = require("../services/auth");
const userService = require("../services/user");

const login = (req, res) => {
  return authService.authenticate(req.body);//temporary 
};
