require("../db/conn");
const authenticate = require("../middleware/authenticate");
const User = require("../models/userschema");
exports.signup = async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "data is not inserted" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      console.log("email sent");
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      console.log("password function working");
      return res.status(422).json({ error: "recheck password" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });
      // const userRegister = await user.save();
      // =============================hasing =============================
      await user.save();
      console.log("working fine");
      res.status(201).json({ message: "successfully saved." });
      //  if(userRegister){
      //   res.status(201).json({ message: "successfully saved." });
      //  }
    }
  } catch (err) {
    next(err);
  }
};

