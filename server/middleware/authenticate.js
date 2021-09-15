const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const User = require("../models/userschema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const UserRoot = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!UserRoot) {
      throw new Error("error: user not found");
    }
    req.token = token;
    req.UserRoot = UserRoot;
    req.userID = UserRoot._id;
    next();
  } catch (err) {
    res.status(401).send("unautherised: NO token provided");
    console.log(err);
  }
};
module.exports = authenticate;
