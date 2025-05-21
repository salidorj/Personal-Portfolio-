import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { FooterBar } from "./modules Components/FooterBar";
import { ItemCard } from "./modules Components/ItemCard";
import AppBarr from "./modules Components/AppBar";

export const WorkPage = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <AppBarr />"
      <Box sx={{ backgroundColor: "white", margin:"50px 0 50px 0" }}>
        <Container maxWidth="md" >
          <Typography
          component="h2"
          variant="h4"
          sx={{
            color: "#21243D",
            fontSize: "44px",
            fontWeight: "bold",
            fontFamily: "DM Serif Display, serif ",
            paddingLeft:"100px",
            margin:"0 0 50px -100px"
          }}
        >
          Work
        </Typography>
          <ItemCard />
          <br />
          <ItemCard />
          <br />
          <ItemCard />
        </Container>
      </Box>
      <FooterBar />
    </Box>
  );
};
