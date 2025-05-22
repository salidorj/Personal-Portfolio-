import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AppBarr from "./modules Components/AppBar";
import { FooterBar } from "./modules Components/FooterBar";

export const WorkPageDetaile = () => {
  return (
    <Box>
      <AppBarr />
      <Box
        sx={{

          backgroundColor: "white",
          padding: "100px 0 50px 0",
        }}
      >
        <Container maxWidth="md">
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontFamily: "DM Serif Display, serif ",
                fontSize: "32px",
                color: "#21243D",
                fontWeight: "600",
                height: "100px",
                overflow: "hidden",
              }}
            >
              Designing Dashboards with usability in mind
            </Typography>
            <Box component="span" sx={{ display: "flex" }}>
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "DM Serif Display, serif ",
                  fontWeight: "bold",
                  backgroundColor: "#FF6464",
                  borderRadius: "20px",
                  padding: "2px",
                  display: "inline-block",
                  width: "62px",
                  textAlign: "center",
                  margin: "0 50px 0 0",
                }}
              >
                2020
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontSize: "20px",
                  color: "#21243D",
                  fontFamily: "DM Serif Display, serif ",
                }}
              >
                Dashboard, User Experience Design
              </Typography>
            </Box>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: "16px",
                color: "#21243D",
                fontFamily: "DM Serif Display, serif ",
                margin:"50px 0 50px 0",
                wordSpacing: "2px",
                wordWrap: "break-word",
                overflow: "auto",
                height: "100px",
                
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Box component="span" sx={{width:"800px", height:"460px"}}>
              <img src="https://placehold.co/680x460" alt="" />
            </Box>
          </Box>
        </Container>
      </Box>
      <FooterBar />
    </Box>
  );
};
