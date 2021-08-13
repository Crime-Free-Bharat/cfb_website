const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const conn = require("../db/conn").promise();
exports.getUser = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer") ||
      !req.headers.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }

    const theToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(theToken, process.env.SECERT_KEY);

    const [row] = await conn.execute(
      "SELECT `id`,`name`,`email` FROM `register` WHERE `id`=?",
      [decoded.id]
    );

    if (row.length > 0) {
      return res.json({
        user: row[0],
      });
    }

    res.json({
      message: "No user found",
    });
  } catch (err) {
    next(err);
  }
};
