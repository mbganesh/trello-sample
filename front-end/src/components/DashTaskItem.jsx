import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskDetail } from "../react-query/Api";

const DashTaskItem = ({ title = "title", _id }) => {
  const { data: list } = useTaskDetail({ _id });

  console.table({_id})

  console.log(list?.data , _id ,'lololo')

  return (
    <Box
      sx={{
        width: "300px",
        margin: 1,
        padding: 0.5,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bolder" alignItems="center">
          {title}
        </Typography>
        <Box>
          <Box>
            <Paper
              elevation={4}
              sx={{
                p: 0.1,
                m: 0.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" fontWeight="light">
                Some new task
              </Typography>
              <DeleteIcon sx={{ color: "red" }} />
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              padding: 2,
            }}
          >
            <TextField size="small" sx={{ flex: 1 }} placeholder="Add Task" />
            <Button variant="contained" size="small" color="primary">
              {" "}
              Add{" "}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DashTaskItem;
