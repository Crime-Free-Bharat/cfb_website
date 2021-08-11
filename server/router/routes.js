const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const { signup } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");
const { getUser } = require("../controllers/getUserController");
const { contact } = require("../controllers/contactController");
router.post(
  "/signup",
  [
    body("name", "The name must be of minimum 3 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 3 }),
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
    body("cpassword", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  signup
);

router.post(
  "/login",
  [
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  login
);

router.post(
  "/contact",
  [
    body("name", "The name must be of minimum 3 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 3 }),
    body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
    body("phone").notEmpty().escape().trim().isLength({ min: 10 }),
    body("subject", "must contain 3 characters").notEmpty().escape().trim().isLength({ min: 3 }),
    body("message", "must contain 10 characters").notEmpty().escape().trim().isLength({ min: 10}), 
  ],
  contact
);


router.get("/getuser", getUser);

module.exports = router;
