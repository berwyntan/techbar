const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: [30, "Name Cannot Exceed 30 Characters"],
    minlength: [4, "Name should have more than 4 characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minlength: [6, "Password should have more then 6 characters"],
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
