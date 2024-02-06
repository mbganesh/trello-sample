import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAddTask } from "../react-query/Api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomeAddTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");


  const addTaskMutation = useAddTask()

  const handleAddTask = async () => {
    // FIXME: add api request
    if (!title) {
      return alert("Please a title!");
    }

    let obj = {
      title,
    };

    let result = await addTaskMutation.mutateAsync(obj);
    console.log(result?.data?.status);

     if(result?.data?.status){
      handleClose()
      setTitle('')
    }
    alert(result?.data?.message)
  };

  return (
    <Box
      sx={{
        width: "350px",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          padding: 3,
          margin: 3,
          borderRadius: 5,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={handleOpen}
      >
        <Typography textAlign="center" fontWeight="bolder" variant="h5">
          {" "}
          Create New Task{" "}
        </Typography>
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new Task
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter a task name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: "none" }}
              fullWidth
              onClick={() => handleAddTask()}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default HomeAddTask;
