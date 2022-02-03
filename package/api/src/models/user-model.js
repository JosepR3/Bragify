const mongoose = require("mongoose");
const  Schema  = mongoose.Schema
const { isEmail } = require("validator");

const userSchema = new Schema(
  {
    // we use the uid from firebase as the _id
    _id: String,
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
