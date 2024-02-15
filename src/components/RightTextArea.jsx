import { Box, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function RightTextArea({ fetchedOutputText, setFetchedOutputText }) {
  const textareaRef = useRef();
  const resizeTextarea = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.addEventListener("input", resizeTextarea, false);

      // Clean up the event listener when the component unmounts
      return () => {
        textareaRef.current.removeEventListener("input", resizeTextarea, false);
      };
    }
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      resizeTextarea();
    }
  }, [fetchedOutputText]);

  const onCopyToClipboard = useCallback(() => {
    textareaRef.current?.select();
    window.navigator.clipboard.writeText(fetchedOutputText);
    alert("Text copied");
  }, [fetchedOutputText]);

  return (
    <Box>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          width: "90%",
          minHeight: "150px",
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs:"row",sm: "row", md: "column" },
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
          // marginRight: "75px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <textarea
            disabled
            placeholder="Translation"
            style={{
              border: "none",
              outline: "none",
              marginRight: "5%",
              padding: "10px",
              fontSize: "20px",
              width: "90%",
              backgroundColor: "#f5f5f5",
            }}
            value={fetchedOutputText}
            id="InputLang"
            ref={textareaRef}
          ></textarea>
        </Box>
        {fetchedOutputText && (
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
          <div>
            <IconButton>
              <VolumeUpOutlinedIcon sx={{ ml: "15px" }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ContentCopyIcon onClick={onCopyToClipboard} />
            </IconButton>
            <IconButton>
              <ThumbsUpDownOutlinedIcon sx={{ ml: "15px" }} />
            </IconButton>
            <IconButton>
              <ShareOutlinedIcon sx={{ ml: "15px" }} />
            </IconButton>
          </div>
        </div>
        )}
      </Box>
    </Box>
  );
}

export default RightTextArea;
