const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("../../../database/models");
const { validateLoginAndPassword } = require("../../../utils/validation");
const { ROLE_USER, SECRET } = require("../../../utils/constants");
const { resolvePassword } = require("../../../utils/password");

const router = Router();

router.post("/", async (req, res) => {
  const { login, password } = req.body;
  if (!validateLoginAndPassword(login, password)) {
    res
      .status(400)
      .json({ message: "Login or passowrd don't match required format" });
  } else {
    const user = await User.findOne({ where: { login } });
    if (
      !user ||
      !(await resolvePassword(password, user.password)) ||
      user.role !== ROLE_USER
    ) {
      res.status(400).json({ message: "Wrong username of password" });
    } else {
      const token = jwt.sign(
        { login, password: user.password, role: ROLE_USER, id: user.id },
        SECRET,
        { expiresIn: 86400 }
      );
      res.status(200).json({
        message: "Authentication is successful",
        token,
        firstName: user.firstName,
        surname: user.surname,
        id: user.id
      });
    }
  }
});

module.exports = router;
