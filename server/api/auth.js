const express = require("express");
const router = express.Router();

const userSignup = (req, res) => {
  const { email, password } = req.body;
};

const userLogin = (req, res) => {};

router.route("/signup").post(userSignup);
router.route("/login").post(userLogin);

module.exports = router;
