const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const conn = require("../db/conn").promise();

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const [row] = await conn.execute(
      "SELECT `email` FROM `register` WHERE `email`=?",
      [req.body.email]
    );

    if (row.length > 0) {
      return res.status(201).json({
        message: "The E-mail already in use",
      });
    }

    const hashPass = await bcrypt.hash(req.body.password, 12);
    const hashPass1 = await bcrypt.hash(req.body.cpassword, 12);

    const [rows] = await conn.execute(
      "INSERT INTO `register`(`name`,`email`,`phone`,`password`,`cpassword`,`date`) VALUES(?,?,?,?,?,CURDATE ())",
      [req.body.name, req.body.email, req.body.phone, hashPass, hashPass1]
    );

    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "The user has been successfully inserted.",
      });
    }
  } catch (err) {
    next(err);
  }
};
