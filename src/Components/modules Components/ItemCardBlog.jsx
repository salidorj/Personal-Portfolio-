import { Box, Typography } from "@mui/material";
import React from "react";

export const ItemCardBlog = () => {
  return (
    <Box
      sx={{
        width: "650px",
        margin: " 0 auto",
        borderBottom: "1px solid #E0E0E0",
        marginBottom:"80px"
      }}
    >
      <Typography
        sx={{
          marginBottom: "10px",
          fontSize: "30px",
          color: "#21243D",
          fontFamily: "DM Serif Display, serif ",
          fontWeight: 800,
        }}
      >
        UI Interactions of the week
      </Typography>
      <Box sx={{ width: "600px", marginBottom: "10px" }}>
        <Typography
          sx={{
            display: "inline-block",
            fontSize: "20px",
            color: "#21243D",
            fontFamily: "DM Serif Display, serif ",
          }}
        >
          12 Feb 2019
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            margin: "0 20px",
            fontSize: "20px",
            color: "#21243D",
            fontFamily: "DM Serif Display, serif ",
          }}
        >
          |
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            color: "#8695A4",
            fontSize: "20px",
            fontFamily: "DM Serif Display, serif ",
          }}
        >
          Express, Handlebars
        </Typography>
      </Box>
      <Typography
        sx={{
          marginBottom: "15px",
          fontWeight:"300",
          fontSize: "16px",
          color: "#21243D",
          fontFamily: "DM Serif Display, serif ",
          overflow:"auto"
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Typography>
    </Box>
  );
};
