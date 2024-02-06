const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: "string",
      // required: true,
      default: "",
    },
    list: {
      type: "array",
      default: [],
    },
    userId: {
      type: 'string',
      default: "",
      // type: mongoose.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const task = mongoose.model("Tasks", schema, "Tasks");

module.exports = task;
