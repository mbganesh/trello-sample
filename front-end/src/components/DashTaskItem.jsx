import {
  Box,
  Button,
  Icon,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskDetail } from "../react-query/Api";

const DashTaskItem = ({
  title,
  list,
  handleAddTaskBtn,
  handleAddTaskText,
  handleDeteleteTaskBtn,
  cardTitle,
  onDragStart,
  onDragLeave,
  onDragEnter,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
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
            {list &&
              list.map((item, index) => (
                <Paper
                  onDragLeave={onDragLeave}
                  onDragEnter={onDragEnter}
                  onDragEnd={onDragEnd}
                  onDragOver={onDragOver}
                  onDragStart={onDragStart}
                  onDrop={(e) => onDrop(e, title)}
                  key={index}
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
                    {item}
                  </Typography>
                  <IconButton onClick={() => handleDeteleteTaskBtn(item)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Paper>
              ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                padding: 2,
              }}
            >
              <TextField
                size="small"
                sx={{ flex: 1 }}
                placeholder="Add Task"
                onChange={handleAddTaskText}
              />
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleAddTaskBtn(title)}
              >
                {" "}
                Add{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DashTaskItem;
