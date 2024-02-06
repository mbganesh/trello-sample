const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
      default: "",
    },
    list: {
      type: "array",
      default: [],
    },
    userId: {
      type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const task = mongoose.model("Tasks", schema, "Tasks");

module.exports = task;
