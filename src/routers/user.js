const express = require("express");

const router = new express.Router();
const { User } = require("../models/user");
const auth = require("../middleware/auth");

//Create

router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    let token = await user.generateAuthToken();
    user.token = token;
    res.status(201).send({
      user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findUser(email, password);
    let token = await user.generateAuthToken();
    user.token = token;
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/success", auth, (req, res) => {
  res.send("Success");
});

//Sign in

module.exports = router;
