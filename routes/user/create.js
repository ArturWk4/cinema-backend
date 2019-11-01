const { Router } = require("express");
const { User } = require("../../database/models");
const { validateNewUser } = require("../../utils/validation");
const { ROLE_USER } = require("../../utils/constants");
const { createPassword } = require("../../utils/password");

const router = Router();

router.post("/", async (req, res) => {
  const { firstName, surname, login, password } = req.body;
  if (!validateNewUser(firstName, surname, login, password)) {
    res.status(400).json({ message: "Wrong data to add new user!" });
  } else {
    await User.create({
      firstName,
      surname,
      login,
      password: await createPassword(password),
      role: ROLE_USER
    });
    res.status(201).json({ message: "Successfully add new user!" });
  }
});

module.exports = router;
