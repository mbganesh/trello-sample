import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ title , _id }) => {
  const navigate = useNavigate();

  const handleDashboardNav = () => {
    navigate("/dashboard", {
      state: {
        title,
        _id
      },
    });
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
            border: "3px solid gray",
          },
        }}
        onClick={() => handleDashboardNav()}
      >
        <Typography textAlign="center" fontWeight="bolder" variant="h5">
          {" "}
          {title}{" "}
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomeCard;
