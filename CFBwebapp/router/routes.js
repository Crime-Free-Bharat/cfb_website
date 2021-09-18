const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authenticate = require("../middleware/authenticate");
const { signup } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");
const { contact } = require("../controllers/contactController");
router.post(
    "/signup", [
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
    "/login", [
        body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
        body("password", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    ],
    login
);

router.post("/contact", authenticate, contact);

router.get("/about", authenticate, (req, res) => {
    console.log("hello i am about");
    res.send(req.UserRoot);
});

module.exports = router;