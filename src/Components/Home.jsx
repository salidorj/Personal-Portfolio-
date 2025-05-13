import React from "react";
import AppBarr from "./modules Components/Appbar";
import {
  Box,
  Container,
  Avatar,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { CardItemHome } from "./modules Components/CardItemHome";
import { ItemCard } from "./modules Components/ItemCard";

export const Home = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <AppBarr />
      <Box
        sx={{
          backgroundColor: "white",
          height: "525px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ padding: 0 }}>
            <Stack sx={{ display: "flex" }}>
              <Typography
                fontFamily="DM Serif Display, serif "
                variant="h1"
                component="h2"
                maxWidth="450px"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: "bold",
                  fontSize: "44px",
                  color: "#21243D",
                  lineBreak: "loose",
                  lineHeight: "60px",
                }}
              >
                Hi, I am S.Ali Dorri, Creative Technologist
              </Typography>
              <Typography
                fontFamily="DM Serif Display, serif "
                variant="p"
                component="p"
                maxWidth="450px"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#21243D",
                  mt: "30px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#FF6464",
                  width: "250px",
                  height: "47px",
                  mt: "30px",
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "300",
                  letterSpacing: "1px",
                  fontFamily: "DM Serif Display, serif ",
                }}
              >
                Download Resume
              </Button>
            </Stack>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://placehold.co/240"
              sx={{ width: 250, height: 240 }}
            />
          </Stack>
        </Container>
      </Box>
      <CardItemHome />
      <Box sx={{ height: "1000px", backgroundColor: "#C0C0C0" }}>
        <Container maxWidth="md">
          <Typography
            variant="h5"
            component="h3"
            sx={{ paddingTop: "40px", paddingBottom: "40px" }}
          >
            Featured works
          </Typography>
          <ItemCard />
          <br />
          <ItemCard />
          <br />
          <ItemCard />
          <br />
        </Container>
      </Box>
    </Box>
  );
};
