import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import bgday from "../static/backgrounds/bgday.webp";
import bgnight from "../static/backgrounds/bgnight.webp";
import bgtwilight from "../static/backgrounds/bgtwilight.webp";

const defaultPanelSx = {
  width: { xs: "300px", sm: "650px", md: "800px" },
  height: { xs: "1000px", sm: "850px", md: "540px" },
};

function SiteBackground({ children, panelSx = {} }) {
  const [background, setBackground] = useState(bgnight);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (event) => {
    event.stopPropagation();
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 10 && hours < 18) {
      setBackground(bgday);
    } else if (hours === 0) {
      setBackground(bgnight);
    } else if ((hours >= 18 && hours < 21) || (hours >= 5 && hours < 10)) {
      setBackground(bgtwilight);
    }
  }, []);

  return (
    <Box
      onClick={handleOpen}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minWidth: "260px",
        minHeight: "100vh",
        height: "auto",
        boxSizing: "border-box",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {isVisible && (
        <Box
          sx={{
            ...defaultPanelSx,
            ...panelSx,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
            fontSize: "24px",
          }}
        >
          {typeof children === "function"
            ? children({ handleClose })
            : children}
        </Box>
      )}
    </Box>
  );
}

export default SiteBackground;
