import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import About from "../components/About";
import Resume from "../components/Resume";
import Photos from "../components/Photos";
import SiteBackground from "../components/SiteBackground";
import { Box } from "@mui/material";

const textStyle = {
  color: "#feffe9",
  cursor: "pointer",
  padding: { xs: "5px 10px", sm: "10px 25px" },
  transition: "background-color 0.3s, color 0.3s",
  borderRight: "2px solid black",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Inconsolata, monospace",
  fontSize: "18px",
  "&:hover": {
    color: "white",
    backgroundColor: "#a8d480",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    transition: "left 0.3s ease",
  },
  "&:hover::before": {
    left: 0,
  },
};

function Home() {
  const [page, setPage] = useState("about");

  return (
    <>
      <SiteBackground>
        {({ handleClose }) => (
          <>
            <Box
              component="nav"
              sx={{
                border: "2px solid black",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                backgroundColor: "#86a953",
                width: "100%",
                marginBottom: "auto",
              }}
            >
              <Typography onClick={() => setPage("about")} sx={textStyle}>
                About
              </Typography>
              <Typography onClick={() => setPage("resume")} sx={textStyle}>
                Professional Experience
              </Typography>
              <Typography onClick={() => setPage("photos")} sx={textStyle}>
                Photography
              </Typography>
              <Typography
                component={RouterLink}
                to="/translations"
                sx={{
                  ...textStyle,
                  borderRight: { xs: "none", sm: "2px solid black" },
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Translations
              </Typography>
              <Box
                onClick={handleClose}
                sx={{
                  ...textStyle,
                  padding: 0,
                  border: "none",
                  borderLeft: "2px solid black",
                  marginLeft: "auto",
                  backgroundColor: "red",
                  width: { xs: "40px", sm: "50px" },
                  height: { xs: "40px", sm: "50px" },
                  "&:hover": {
                    backgroundColor: "#bf0000",
                  },
                }}
              />
            </Box>
            {page === "about" && <About />}
            {page === "resume" && <Resume />}
            {page === "photos" && <Photos />}
          </>
        )}
      </SiteBackground>
    </>
  );
}

export default Home;
