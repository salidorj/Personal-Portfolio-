import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const FooterBar = () => {
  return (
    <Box sx={{ textAlign: "center", backgroundColor:"white" }}>
      <Box
        component="span"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ bgcolor: "white", width: 40, height: 40 }}
            variant="square"
          >
            <FacebookIcon sx={{ width: 35, height: 35, color: "#21243D" }} />
          </Avatar>
          <Avatar
            sx={{ bgcolor: "white", width: 40, height: 40 }}
            variant="square"
          >
            <InstagramIcon sx={{ width: 35, height: 35, color: "#21243D" }} />
          </Avatar>
          <Avatar
            sx={{ bgcolor: "white", width: 40, height: 40 }}
            variant="square"
          >
            <TwitterIcon sx={{ width: 35, height: 35, color: "#21243D" }} />
          </Avatar>
          <Avatar
            sx={{ bgcolor: "white", width: 40, height: 40 }}
            variant="square"
          >
            <LinkedInIcon sx={{ width: 35, height: 35, color: "#21243D" }} />
          </Avatar>
          <Avatar
            sx={{ bgcolor: "white", width: 40, height: 40 }}
            variant="square"
          >
            <GitHubIcon sx={{ width: 35, height: 35, color: "#21243D" }} />
          </Avatar>
        </Stack>
      </Box>
      <p style={{ color: "#21243D" , marginBottom: 0, paddingBottom: 50}}>
        {" "}
        Copyright &copy; 2020 All rights reserved{" "}
      </p>
    </Box>
  );
};
