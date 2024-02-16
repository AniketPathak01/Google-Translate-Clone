import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        p: "20px",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/AniketPathak01"
          target="_blank"
          style={{ marginRight: "10px" }}
        >
          <GitHubIcon sx={{ color: "gray" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/aniket-pathak-89642a230/"
          target="_blank"
        >
          <LinkedInIcon sx={{ color: "gray" }} />
        </a>
      </div>
      <p style={{ marginTop: "10px", fontSize: "14px", color: "gray" }}>
        © {new Date().getFullYear()} Aniket Pathak. All rights reserved.
      </p>
    </Box>
  );
}

export default Footer;
