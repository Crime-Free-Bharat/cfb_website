const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const conn = require("../db/conn").promise();

exports.contact = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const [rows] = await conn.execute(
      "INSERT INTO `contact`(`name`,`email`,`subject`,`message`,`phone`) VALUES(?,?,?,?,?)",
      [req.body.name, req.body.email,req.body.subject, req.body.message,req.body.phone]
    );
    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "we got your application, will contact you soon.",
      });
    }
};