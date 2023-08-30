const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Kindly enter a name?"],
    minlength: 4,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, "Kindly Enter ur mail?"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid mail address!!!",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Kindly Provide a strong password?"],
    minlength: 4,
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
