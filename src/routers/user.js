const express = require("express");
const mongoClient = require("../db/connect.js");

const router = new express.Router();
const { User } = require("../models/user");

const user1 = new User({
  name: "kridi",
  email: "kridiramilli@gmail.com",
  password: "mypass",
});

// user1.save();

User.findOne(
  {
    _id: "578f6fa2df35c7fbdbaed8f6",
  },
  (err, data) => {
    console.log(data);
    console.error(err);
  }
);

//Create

router.post("/users", (req, res) => {
  console.log(req.body);
  res.status(200).send("Hello form users");
});

//Sign in

module.exports = router;
