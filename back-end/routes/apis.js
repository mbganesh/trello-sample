var express = require("express");
var router = express.Router();

const UserModel = require("../schema/UserSchema");
const TaskModel = require("../schema/TasksSchema");

// var task = require('../schema/TaskSchema.js')

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET-TASK-LIST
router.get("/task-list", async (req, res) => {
  try {
    let taskList = await TaskModel.find();
    return res.json({
      status: true,
      message: "successfully fetched task list",
      data: taskList,
    });
  } catch (e) {
    console.log("Err - ", e.message);
    res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

// Add
router.post("/add-task", async (req, res) => {
  try {
    const reqData = req.body;
    console.table(reqData);
    const storeData = new TaskModel({
      title: reqData.title,
      userId: "test-user",
    });
    await storeData.save();
    return res.json({
      status: true,
      message: "Task added successfully",
    });
  } catch (e) {
    console.log("Err - ", e.message);
    res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

// Create a new task
router.post("/add-task-card", async (req, res) => {
  try {
    const reqData = req.body;
    console.table(reqData);

    let findQuery = { _id: reqData._id };
    let updateQuery = { $push: { list: reqData.title } };
    let options = {};

    await TaskModel.findOneAndUpdate(findQuery, updateQuery, options);

    return res.json({
      status: true,
      message: "New task added successfully",
    });
  } catch (e) {
    console.log("Err - ", e.message);
    res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

router.get("/task-detail", async (req, res) => {
  try {
    let findQuery = { _id: req.query._id };
    
    console.table(findQuery)

    let taskList = await TaskModel.find(findQuery);
    return res.json({
      status: true,
      message: "successfully fetched task details",
      data: taskList,
    });
  } catch (e) {
    console.log("Err - ", e.message);
    res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;
