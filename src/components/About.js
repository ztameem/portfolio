import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { GitHub, Email, LinkedIn, Description } from "@mui/icons-material";
import Listening from "../components/Listening";
import resume from "../static/resume.pdf";
import profile from "../static/profile.jpeg";

const iconStyle = {
  border: "2px solid black",
  margin: "2px",
  color: "black",
};

const headerStyle = {
  fontFamily: "Inconsolata, monospace",
  fontSize: "20px",
  fontWeight: 500,
};

const contentStyle = {
  fontFamily: "Inconsolata, monospace",
  fontSize: "14px",
};

const bodyStyle = {
  fontFamily: "Inconsolata, monospace",
  fontWeight: 500,
  textAlign: { xs: "center", md: "left" },
  marginLeft: { xs: "auto", md: "" },
  marginRight: { xs: "auto", md: "" },
};

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: { xs: "10px", sm: "30px" },
        backgroundColor: "#feffe9",
        border: "2px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ marginRight: { md: "40px" } }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={profile}
              alt="Profile"
              sx={{
                width: "200px",
                height: "200px",
                border: "2px solid black",
                marginLeft: { xs: "auto", md: "0px" },
                marginRight: { xs: "auto", md: "0px" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/ztameem"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <GitHub />
            </IconButton>
            <IconButton
              aria-label="Email"
              component="a"
              href="mailto:tameem_zaidat@brown.edu"
              sx={iconStyle}
            >
              <Email />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/tameem-zaidat-a3a0752a9/"
              sx={iconStyle}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="Resume"
              component="a"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <Description />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Listening />
          </Box>
        </Box>

        <Box>
          <Typography variant="h3" component="div" sx={bodyStyle}>
            Tameem Zaidat
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ ...bodyStyle, paddingBottom: "15px" }}
          >
            Computer Engineering B.S. & Computer Science M.S. Brown University
            2027
          </Typography>
          <Typography
            variant="body"
            component="div"
            sx={{
              ...bodyStyle,
              marginTop: "10px",
              paddingBottom: "15px",
              fontFamily: "Inconsolata, monospace",
              fontSize: "14px",
            }}
          >
            Currently a SWE intern developing a digital exhibit for Innocent
            Knowledge.
            <br />
            <br /> I'm passionate for tech that bridges 'people and place' in
            ways that tell their stories. Outside of that, I love to log
            movies/books, learn new instruments, write, and take photos!
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
              ontFamily: "Inconsolata, monospace",
              fontSize: "14px",
            }}
          >
            <Box>
              <Typography variant="h6" sx={headerStyle}>
                Cool Projects
              </Typography>
              <Typography sx={contentStyle}>
                <a href="https://brown-fsae.vercel.app/issues">Formula 1</a> |{" "}
                <a href="https://devpost.com/software/studyspace-cewp4f">
                  StudySpace
                </a>{" "}
                |{" "}
                <a href="https://docs.google.com/presentation/d/14Jz2p5g3L7eoxf7sJZiOSAKkScr4-_H1CHgsaYjhe8A/edit?usp=sharing">
                  DengAway
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                marginLeft: "30px",
              }}
            >
              <Typography variant="h6" sx={headerStyle}>
                Fun Profiles
              </Typography>
              <Typography sx={contentStyle}>
                <a href="https://letterboxd.com/meematzzz/">Letterboxd</a> |{" "}
                <a href="https://www.goodreads.com/user/show/173299244-tameem">
                  Goodreads
                </a>{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
