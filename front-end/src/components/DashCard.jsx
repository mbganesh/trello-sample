import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAddCard } from "../react-query/Api";

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

const DashCard = ({ _id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");

  const mutation = useAddCard();

  const handleNewTask = () => {
    handleOpen();
  };

  const handleAddTaskList = async () => {
    if (!title) return;

    let obj = {
      _id,
      title,
    };
    const res = await mutation.mutateAsync(obj);
    console.log(res.data);
    setTitle("");
  };

  return (
    <Box
      sx={{
        width: "300px",
        maxHeight: "100px",
        backgroundColor: "#545452",
        margin: 3,
        padding: 3,
        color: "#fff",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => handleNewTask()}
    >
      <Typography
        variant="h6"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <AddIcon />
        Create New Task
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new task
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
              onClick={() => handleAddTaskList()}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DashCard;
