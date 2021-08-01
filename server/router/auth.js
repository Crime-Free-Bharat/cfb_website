const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../models/userschema");
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });
router.post("/", (req, res) => {
  const reg_query =
    "INSERT INTO register (reg_name,reg_email,reg_phone_no,reg_pwd,reg_role,reg_date) VALUES ('vasu', 'vasu@gmail.com','1234567891','123456','public','2001-04-24')";
  module.export.con.query(reg_query, function (err) {
    if (err) throw err;
    console.log("1 record inserted successfully");
  });
});
//====================================================== asycronus javascript =========================================
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "data not inserted" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "recheck password" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      // const userRegister = await user.save();
      // =============================hasing =============================
      await user.save();

      res.status(201).json({ message: "successfully saved." });
      //  if(userRegister){
      //   res.status(201).json({ message: "successfully saved." });
      //  }
    }
  } catch (err) {
    console.log(err);
  }
});

//============================login route ===============================
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "login is here"});
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
      token = await userlogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "invaild ho bhia tum" });
      } else {
        res.json({ message: "successfully login h tu bhia khush hoja" });
      }
    } else {
      res.status(400).json({ error: "invaild h bhia tu" });
    }
    // ==============================bycript for login functionality =================================
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
