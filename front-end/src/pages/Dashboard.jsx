import { Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashCard from "../components/DashCard";
import DashTaskItem from "../components/DashTaskItem";

const Dashboard = () => {
  const location = useLocation();
  const { title, _id } = location.state;

  const [taskDetail, setTaskDetail] = useState([
    {
      title: "Sample",
      list: ["test 1", "test 2", "test 3", "test 4"],
    },
    {
      title: "Sample 2",
      list: ["test 5", "test 6"],
    },
    {
      title: "Sample 3",
      list: ["test 7", "test 8", "test 9"],
    },
  ]);

  const [cardTitle, setCardTitle] = useState("");

  const handleAddTaskBtn = (task) => {
    console.log(task, "ADDDDDDDDDDDd");
    if (!cardTitle) return;

    const index = taskDetail.findIndex((item) => item.title === task);

    if (index !== -1) {
      const newTaskDetail = [...taskDetail];
      const updatedObject = { ...newTaskDetail[index] };
      updatedObject.list = [...updatedObject.list, cardTitle];
      newTaskDetail[index] = updatedObject;
      setTaskDetail(newTaskDetail);
      setCardTitle("");
    }
  };

  const handleDeteleteTaskBtn = (subTask) => {
    const dataIndex = taskDetail.findIndex((item) =>
      item.list.includes(subTask)
    );
    if (dataIndex !== -1) {
      const newData = [...taskDetail];
      const updatedObject = { ...newData[dataIndex] };
      const itemIndex = updatedObject.list.indexOf(subTask);
      updatedObject.list.splice(itemIndex, 1);
      newData[dataIndex] = updatedObject;
      setTaskDetail(newData);
    }
  };

  const handleAddTaskText = (e) => {
    setCardTitle(e.target.value);
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(taskDetail);
  }, [taskDetail]);

  const onDragStart = (evt, task) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", task);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (evt, targetColumn) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let updatedTasks = tasks.map((task) => {
      if (task.title === targetColumn) {
        task.list = [...task.list, data];
      } else if (task.list.includes(data)) {
        task.list = task.list.filter((item) => item !== data);
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  console.log(title, _id);
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          padding: 2,
          background: "#c4c4c2",
        }}
      >
        <Typography variant="h3" textAlign="center">
          {location.state.title ?? "Title"}
        </Typography>
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {taskDetail?.map((task, index) => {
          console.log(task, "lol33");
          return (
            <DashTaskItem
              key={index}
              title={task.title}
              list={task.list}
              handleAddTaskText={handleAddTaskText}
              cardTitle={cardTitle}
              handleAddTaskBtn={handleAddTaskBtn}
              handleDeteleteTaskBtn={handleDeteleteTaskBtn}
              onDragLeave={(e) => onDragLeave(e)}
              onDragEnter={(e) => onDragEnter(e)}
              onDragEnd={(e) => onDragEnd(e)}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, task.title)}
            />
          );
        })}
        <DashCard _id={_id} />
      </Box>
    </Box>
  );
};

export default Dashboard;
