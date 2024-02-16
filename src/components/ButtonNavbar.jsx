import { Box, Button } from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LanguageIcon from "@mui/icons-material/Language";

function ButtonNavbar() {
  const buttonStyle = {
    textTransform: "none",
    fontWeight: "bold",
    borderColor: "e3e3e3",
  };
  return (
    <Box
      sx={{
        mt: 2,
        ml: { xs: 1, sm: 1, md: 15 },
      }}
    >
      <Button
        variant="outlined"
        startIcon={<TranslateIcon />}
        sx={{ width: "auto", height: "40px", mr: 2 }}
        style={buttonStyle}
      >
        Text
      </Button>
      <Button
        variant="outlined"
        startIcon={<CropOriginalIcon />}
        sx={{ width: "auto", height: "40px", mr: 2 }}
        style={buttonStyle}
      >
        Images
      </Button>
      <Button
        variant="outlined"
        startIcon={<InsertDriveFileIcon />}
        sx={{ width: "auto", height: "40px", mr: 2 }}
        style={buttonStyle}
      >
        Documents
      </Button>
      <Button
        variant="outlined"
        startIcon={<LanguageIcon />}
        sx={{ width: "auto", height: "40px", mr: 2 }}
        style={buttonStyle}
      >
        Websites
      </Button>
    </Box>
  );
}

export default ButtonNavbar;
