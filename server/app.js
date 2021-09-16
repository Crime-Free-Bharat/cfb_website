const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

// ======================================dotenv ==================================
dotenv.config({ path: "./config.env" });
//====================================== express middleware (link router file) ==============================
app.use(express.json());
app.use(cookieParser());
app.use(require("./router/routes"));
// app.use('/auth',require('./route/auth'));
// ==================================== variable use =====================================

app.get("/", (req, res) => {
  console.log("ha bhia me hi get hu");
  res.send("hello bhia me hi hu get home vala ");
});

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled" });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
