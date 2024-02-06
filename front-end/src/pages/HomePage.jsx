import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeCard from "../components/HomeCard";
import HomeAddTask from "../components/HomeAddTask";
import { useNavigate } from "react-router-dom";
import { useTaskList } from "../react-query/Api.js";

const HomePage = () => {
  const navigate = useNavigate();
  

  const { data: taskList , isLoading , isSuccess} = useTaskList({});

  console.log(taskList?.data?.data);


  if(isLoading ){
    return (
      <h3>Loading...</h3>
    )
  }  
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {isSuccess &&
          taskList?.data?.data?.map((task, index) => (
            <HomeCard key={index} title={task.title} _id={task._id} />
          ))}
        <HomeAddTask />
      </Box>
    </Box>
  );
};

export default HomePage;
