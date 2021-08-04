const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const db_created = "USE Of8xVxTpYC";
  con.query(db_created, function (err) {
    if (err) throw err;
    console.log("Database USED ");
  });
});

module.exports = con;
