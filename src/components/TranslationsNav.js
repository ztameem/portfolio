import React from "react";
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const translationsNavTextStyle = {
  color: "#feffe9",
  cursor: "pointer",
  padding: { xs: "5px 10px", sm: "10px 25px" },
  transition: "background-color 0.3s, color 0.3s",
  borderRight: "2px solid black",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Inconsolata, monospace",
  fontSize: "18px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  "&:hover": {
    color: "white",
    backgroundColor: "#a8d480",
  },
};

const inactiveTranslationsTabSx = {
  ...translationsNavTextStyle,
  cursor: "default",
  borderRight: { xs: "none", sm: "2px solid black" },
  backgroundColor: "#6d8a42",
  color: "white",
  "&:hover": {
    backgroundColor: "#6d8a42",
    color: "white",
  },
};

/**
 * @param {"list" | "detail"} props.mode
 */
function TranslationsNav({ mode, handleClose }) {
  return (
    <Box
      component="nav"
      sx={{
        border: "2px solid black",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        backgroundColor: "#86a953",
        width: "100%",
        flexShrink: 0,
      }}
    >
      {mode === "detail" && (
        <Box
          component={RouterLink}
          to="/translations"
          sx={{
            ...translationsNavTextStyle,
            borderRight: "2px solid black",
          }}
        >
          ← Back
        </Box>
      )}
      <Box
        component={RouterLink}
        to="/"
        sx={{
          ...translationsNavTextStyle,
          borderRight: "2px solid black",
        }}
      >
        Home
      </Box>
      {mode === "list" ? (
        <Box sx={inactiveTranslationsTabSx}>Translations</Box>
      ) : (
        <Box
          component={RouterLink}
          to="/translations"
          sx={{
            ...translationsNavTextStyle,
            borderRight: { xs: "none", sm: "2px solid black" },
          }}
        >
          Translations
        </Box>
      )}
      <Box
        onClick={handleClose}
        sx={{
          ...translationsNavTextStyle,
          padding: 0,
          border: "none",
          borderLeft: "2px solid black",
          marginLeft: "auto",
          backgroundColor: "red",
          width: { xs: "40px", sm: "50px" },
          height: { xs: "40px", sm: "50px" },
          flexShrink: 0,
          "&:hover": {
            backgroundColor: "#bf0000",
          },
        }}
      />
    </Box>
  );
}

export default TranslationsNav;
