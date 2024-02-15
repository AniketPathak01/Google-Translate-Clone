import { Box, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";

function LeftTextArea({ enteredText, setEntredText, clearRightTextArea }) {
  const textareaRef = useRef();

  useEffect(() => {
    const resizeTextarea = () => {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);

      // Clean up the event listener
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);

  const [charCount, setCharCount] = useState(0);

  const handleInput = (e) => {
    if (e.target.value.length <= 500) {
      setEntredText(e.target.value);
      setCharCount(e.target.value.length);
    }
  };

  const clearTextArea = (e) => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.style.height = "auto";
      setEntredText(""); // Clear enteredText
      setCharCount(0); // Reset charCount
      clearRightTextArea(); // Clear right text area
    }
  };
  return (
    <Box>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          width: "98%",
          minHeight: "150px",
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs:"row",sm: "row", md: "column" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <textarea
            style={{
              border: "none",
              outline: "none",
              marginRight: "5%",
              padding: "10px",
              fontSize: "20px",
              width: "90%",
            }}
            value={enteredText}
            id="InputLang"
            onChange={handleInput}
            ref={textareaRef}
          ></textarea>

          <CloseOutlinedIcon
            sx={{
              color: "gray",
              m: "8px",
              cursor: "pointer",
            }}
            onClick={clearTextArea}
          />
        </Box>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "gray",
            marginLeft: "5px",
            marginRight: "15px",
          }}
        >
          <IconButton>
            <MicNoneOutlinedIcon />
            {charCount > 0 ? (
              <IconButton>
                <VolumeUpOutlinedIcon sx={{ ml: "15px" }} />
              </IconButton>
            ) : (
              ""
            )}
          </IconButton>

          <span> {charCount}/500 </span>
        </div>
      </Box>
    </Box>
  );
}

export default LeftTextArea;
