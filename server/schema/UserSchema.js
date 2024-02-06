const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: {
      type: "string",
      // required: true,
      default: "",
    },
    password: {
      type: "string",
      // required: true,
      default: "",
    },
    userName: {
      type: "string",
      // required: true,
      default: "",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("Users", schema, "Users");

module.exports = user;
