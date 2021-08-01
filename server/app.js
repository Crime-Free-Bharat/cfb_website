const express = require("express");
const dotenv = require("dotenv");

const app = express();
// ======================================dotenv ==================================
dotenv.config({ path: "./config.env" });
require("./db/conn"); //import createAuth0Client from '@auth0/auth0-spa-js';

// const User = require("./models/userschema");

//====================================== express middleware (link router file) ==============================
app.use(express.json());
app.use(require("./router/auth"));
// app.use('/auth',require('./route/auth'));
// ==================================== variable use =====================================
const PORT = process.env.PORT;



app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
