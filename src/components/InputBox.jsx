import React, { useEffect, useState } from "react";
import Langauges from "./Langauges";
import { Box } from "@mui/material";
import LeftTextArea from "./LeftTextArea";
import RightTextArea from "./RightTextArea";

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function InputBox() {
  const [translateFromLanguage, setTranslateFromLanguage] = useState("all");
  const [translateToLanguage, setTranslateToLanguage] = useState("hi");

  const [enteredText, setEntredText] = useState("");
  const [fetchedOutputText, setFetchedOutputText] = useState("");

  // Debounce enteredText
  const debouncedEnteredText = useDebounce(enteredText, 1000);

  useEffect(() => {
    if (debouncedEnteredText) {
      fetch(
        `https://api.mymemory.translated.net/get?q=${debouncedEnteredText}!&langpair=${
          translateFromLanguage === "all" ? "en" : translateFromLanguage
        }|${translateToLanguage}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFetchedOutputText(data.responseData.translatedText);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [debouncedEnteredText, translateFromLanguage, translateToLanguage]);

  const clearRightTextArea = () => {
    setFetchedOutputText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        ml: { xs: 1, sm: 1, md: 13 },
        mt: 3,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Langauges
          currentLanguage={translateFromLanguage}
          setLanguage={setTranslateFromLanguage}
          languages={[
            { id: "all", label: "Detect Language" },
            { id: "en", label: "English" },
            { id: "hi", label: "Hindi" },
            { id: "mr", label: "Marathi" },
          ]}
        />
        <LeftTextArea
          enteredText={enteredText}
          setEntredText={setEntredText}
          clearRightTextArea={clearRightTextArea}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Langauges
          currentLanguage={translateToLanguage}
          setLanguage={setTranslateToLanguage}
          languages={[
            { id: "hi", label: "Hindi" },
            { id: "en", label: "English" },
            { id: "fr", label: "French" },
            { id: "mr", label: "Marathi" },
          ]}
        />
        <RightTextArea
          fetchedOutputText={fetchedOutputText}
          setFetchedOutputText={setFetchedOutputText}
        />
      </Box>
    </Box>
  );
}

export default InputBox;
