import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DashCard from "../components/DashCard";
import DashTaskItem from "../components/DashTaskItem";

const Dashboard = () => {
  const location = useLocation();
  const [taskList, setTaskList] = useState(["task 1", "task 2", "task 3"]); // taskList?.data?.data
  const { title, _id } = location.state;


  let SAMPLE_DATA = [
    {
      title: "Sample",
      list:[
        'test 1',
        'test 2',
        'test 3',
        'test 4',
      ]
    },
    {
      title: "Sample 2",
      list:[
        'test 5',
        'test 6',
      ]
    },
    {
      title: "Sample 3",
      list:[
        'test 7',
        'test 8',
        'test 9',
      ]
    }
  ]


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
        {taskList?.map((task, index) => {
          console.log(task  , 'lol33')
          return (
            <DashTaskItem key={index} title={task} _id={task._id} />
          )
        })}
        <DashCard _id={_id} />
      </Box>
    </Box>
  );
};

export default Dashboard;
