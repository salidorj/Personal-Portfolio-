import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const CardItemHome = () => {
  return (
    <Box sx={{ height: "400px", backgroundColor: "#EDF7FA" }}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="p"
            sx={{
              marginTop: "25px",
              marginBottom: "20px",
              color: "#21243D",
              fontFamily: "DM Serif Display, serif ",
              fontWeight: 700,
            }}
          >
            Recent posts
          </Typography>
          <Typography
            variant="h6"
            component="a"
            sx={{
              marginTop: "25px",
              marginBottom: "20px",
              color: "#00A8CC",
              fontFamily: "DM Serif Display, serif ",
              fontSize: "17px",
              fontWeight: 500,
            }}
          >
            View all
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontFamily: "DM Serif Display, serif ",
                  paddingTop: "25px",
                  color: "#21243D",
                  fontSize: "25px",
                  fontWeight: "600",
                  wordSpacing: "10px",
                }}
              >
                Making a design system from scratch
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "30px",
                }}
              >
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  12 Feb 2020
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  |
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  Design, Pattern
                </Typography>
              </Box>
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#21243D",
                  paddingTop: "35px",
                  fontFamily: "DM Serif Display, serif ",
                  fontSize: "16px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Container>
          </Box>

          <Box
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Container maxWidth="md">
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontFamily: "DM Serif Display, serif ",
                  paddingTop: "25px",
                  color: "#21243D",
                  fontSize: "25px",
                  fontWeight: "600",
                  wordSpacing: "10px",
                }}
              >
                Making a design system from scratch
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "30px",
                }}
              >
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  12 Feb 2020
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  |
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#21243D",
                    fontFamily: "DM Serif Display, serif ",
                  }}
                >
                  Design, Pattern
                </Typography>
              </Box>
              <Typography
                variant="p"
                component="p"
                sx={{
                  color: "#21243D",
                  paddingTop: "35px",
                  fontFamily: "DM Serif Display, serif ",
                  fontSize: "16px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
