import React from "react";
import { Box, Typography } from "@mui/material";
import { GitHub, Instagram, YouTube } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400mx ",
            },
          }}
        >
          <Instagram />
          <GitHub />
          <YouTube />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved &copy; Spice Corner
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
