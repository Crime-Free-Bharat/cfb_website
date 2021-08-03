const express = require("express");
const dotenv = require("dotenv");

const app = express();
// ======================================dotenv ==================================
dotenv.config({ path: "./config.env" });
require("./db/conn");

//====================================== express middleware (link router file) ==============================
app.use(express.json());
app.use(require("./router/routes"));
// app.use('/auth',require('./route/auth'));
// ==================================== variable use =====================================

app.get("/", (req, res) => {
  console.log("ha bhia me hi get hu");
  res.send("hello bhia me hi hu get home vala ");
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
