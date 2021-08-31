const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("../db/conn");
const User = require("../models/userschema");

exports.login = async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill data" });
    }
    const userlogin = await User.findOne({ email: email });
    // console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);

      // =====================================  token ============================

      if (!isMatch) {
        res.status(400).json({ error: "invaild credetials" });
      } else {
        token = await userlogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        res.json({ message: "successfully login" });
      }
    } else {
      res.status(400).json({ error: "invaild data details" });
    }
    // ==============================bycript for login functionality =================================
  } catch (err) {
    console.log(err);
  }
};
