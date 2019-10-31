const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("../../database/models");
const { validateLoginAndPassword } = require("../../utils/validation");
const { resolvePassword } = require("../../utils/password");
const { SECRET, ROLE_ADMIN, EXPIRESIN_JWT } = require("../../utils/constants");

const router = Router();

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  if (!validateLoginAndPassword(login, password)) {
    res
      .status(400)
      .json({ message: "Login or password don't match required format!" });
  } else {
    const user = await User.findOne({ where: { login } });
    if (
      !user ||
      !(await resolvePassword(password, user.password)) ||
      user.role !== ROLE_ADMIN
    ) {
      res.status(400).json({ message: "Wrong username or password or role" });
    } else {
      const token = jwt.sign(
        { login, password: user.password, role: ROLE_ADMIN, id: user.id },
        SECRET,
        { expiresIn: EXPIRESIN_JWT }
      );
      res.status(200).json({
        message: "Authentication is successful!",
        token,
        firstName: user.firstName,
        surname: user.surname,
        id: user.id
      });
    }
  }
});

module.exports = router;
