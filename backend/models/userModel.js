const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
