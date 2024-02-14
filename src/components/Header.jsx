import { Avatar, Box } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        height: "4.5%",
        borderBottom: "1px solid rgba(0,0,0,0.12)",
        p: 2,
        color: "gray",
      }}
    >
      <Box className="left_side" sx={{ display: "flex", alignItems: "center" }}>
        <MenuIcon sx={{ ml: "1rem", mr: 2 }} />
        <Box
          component="img"
          src={logo}
          alt="GooGle logo"
          sx={{
            height: "auto",
            width: "150px",
            mt: 0.5,
            display: { xs: "none", sm: "block" },
          }}
        />
      </Box>

      <Box
        className="right_side"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SettingsIcon sx={{ mr: "1.3rem" }} />
        <AppsIcon sx={{ mr: "1.3rem" }} />
        <Avatar
          alt="Remy Sharp"
          sx={{ mr: "1rem", width: "30px", height: "30px" }}
        />
      </Box>
    </Box>
  );
}

export default Header;
