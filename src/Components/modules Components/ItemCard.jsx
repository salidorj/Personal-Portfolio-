import React from "react";
import { Box, Container, Typography } from "@mui/material";
export const ItemCard = () => {
  return (
    <Box
      sx={{
        height: "230px",
        width: "858px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom:"2px solid #E0E0E0"
      }}
    >
      <img
        src="https://placehold.co/250x180"
        alt=""
        style={{ maxWidth: "250px", maxHeight: "180px" }}
      />

      <Box sx={{width: "608px" }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: "30px",
            color: "#21243D",
            fontWeight: "bold",
            fontFamily: "DM Serif Display, serif ",
            letterSpacing: "1px",
            position: "relative",
            top: "0px",
            left: "20px",
          }}
        >
          Designing Dashboards
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
            fontFamily: "DM Serif Display, serif ",

            fontWeight: "bold",
            backgroundColor: "#142850",
            borderRadius: "20px",
            padding: "2px",
            display: "inline-block",
            width: "62px",
            textAlign: "center",
            position: "relative",
            left: "20px",
            top: "25px",
          }}
        >
          2020
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            fontSize: "20px",
            color: "#8695A4",
            fontFamily: "DM Serif Display, serif ",
            position: "relative",
            left: "150px",
            top: "-6px",
          }}
        >
          Dashboard
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            fontSize: "16px",
            color: "#21243D",
            fontFamily: "DM Serif Display, serif ",
            position: "relative",
            left: "20px",
            top: "25px",
            wordSpacing:"2px",
            wordWrap:"break-word",
            overflow:"auto",
            height:"100px",
            padding:"2px"
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </Box>
    </Box>
  );
};
