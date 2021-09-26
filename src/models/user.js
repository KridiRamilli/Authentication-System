const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateEmail } = require("../utils");

const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  let token = jwt.sign(
    {
      _id: user._id.toString(),
      email: user.email,
    },
    process.env.JWT_SECRET
  );
  return token;
};

userSchema.statics.findUser = async function (email, password) {
  const user = await this.findOne({
    email,
  });
  if (!user) {
    throw new Error("User not found!");
  }
  let isPassMatch = await bcrypt.compare(password, user.password);
  if (!isPassMatch) {
    throw new Error("Password don't match");
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    let hash = await bcrypt.hash(user.password, saltRounds);
    user.password = hash;
    console.log("userpass", user.password);
    return next();
  }
});

module.exports = {
  User: mongoose.model("User", userSchema),
};
