const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route    POST /api/auth
// @desc     new user login
// @access   Private
router.post(
  "/",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "Password is reqiured").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  }
);

// @route    GET /api/auth
// @desc     Get the logged in user
// @access   Public
router.get("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;
