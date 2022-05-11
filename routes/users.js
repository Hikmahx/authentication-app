const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

// @ route GET api/users
// @ desc  Get registered user
// @ access Private
router.get("/", (req, res) => {
  res.send("this is the user route");
});

// @ route POST api/users
// @ desc  Register user
// @ access Public
router.post(
  "/",
  body("firstname", "Please enter a  first name").not().isEmpty(),
  body("lastname", "Please enter a last name").not().isEmpty(),
  body("email", "Please include a valid email").isEmail(),
  body(
    "password",
    "Please password shouldnt be less than 6 characters"
  ).isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).send("User already exists");
      }

      // CREATE A NEW USER
      user = new User({
        firstname,
        lastname,
        email,
        password,
      });

      let salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send(user);
    } catch (error) {}
  }
);

module.exports = router;
