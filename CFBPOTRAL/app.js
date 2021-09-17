const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");

// ======================================dotenv ==================================
dotenv.config({ path: "./config.env" });
//====================================== express middleware (link router file) ==============================
app.use(express.json());
app.use(cookieParser());
app.use(require("./router/routes"));
// app.use('/auth',require('./route/auth'));
// ==================================== variable use =====================================
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("ha bhia me hi get hu");
  res.send("hello bhia me hi hu get home vala ");
});

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled" });
});
//======================================================== hosting file ==================================
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
