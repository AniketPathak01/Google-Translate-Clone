import { Box, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

function RightTextArea({ fetchedOutputText, setFetchedOutputText }) {
  const textareaRef = useRef();
  const [showCopyMessage, setShowCopyMessage] = useState(false);
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
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000); // Hides the message after 2000 milliseconds (2 seconds)
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
          flexDirection: { xs: "column", sm: "column", md: "column" },
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
        }}
      >
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
        {fetchedOutputText && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              color: "gray",
              marginLeft: "5px",
              marginRight: "15px",
            }}
          >
            <Box>
              <IconButton>
                <VolumeUpOutlinedIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <ContentCopyIcon onClick={onCopyToClipboard} />
              </IconButton>
              <IconButton>
                <ThumbsUpDownOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShareOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
      {showCopyMessage && (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            width: "150px",
            border: 1,
            borderRadius: 5,
            marginTop: "15px",
            padding: "5px",
          }}
        >
          Translation copied
        </p>
      )}
    </Box>
  );
}

export default RightTextArea;
