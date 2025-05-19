import React from "react";
import AppBarr from "./modules Components/Appbar";
import { Box, Container, Typography } from "@mui/material";
import { ItemCardBlog } from "./modules Components/itemCardBlog";
import { FooterBar } from "./modules Components/FooterBar";

export const Blog = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <AppBarr />
      <Box sx={{ background: "",margin:"50px 0 0 0" }}>
        <Container maxWidth="md">
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: "#21243D",
            fontSize: "44px",
            fontWeight: "bold",
            fontFamily: "DM Serif Display, serif ",
            paddingLeft:"100px",
            margin:"0 0 50px 0"
          }}
        >
          Blog
        </Typography>
        <ItemCardBlog />
        <ItemCardBlog />
        <ItemCardBlog />
        <ItemCardBlog />
        </Container>
      </Box>
      <FooterBar />

    </Box>
  );
};
