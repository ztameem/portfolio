import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BrownU from "../static/logos/brownu.jpeg";
import InnocentKnowledge from "../static/logos/innocentknowledge.jpeg";
import BrownLibrary from "../static/logos/brownlibrary.jpeg";
import Fullstack from "../static/logos/fullstack.jpeg";
import ResumeCard from "./ResumeCard";

const companies = [
  {
    image: InnocentKnowledge,
    name: "Innocent Knowledege Digital Exhibition",
    title: "Software Development Intern",
    duration: "May 2025 - Present",
    location: "Monroe, MI",
    // link: "",
  },
  {
    image: BrownLibrary,
    name: "Brown University Library Web Services",
    title: "Software Engineering Intern",
    duration: "Apr 2024 - Aug 2024",
    location: "Providence, RI",
    link: "https://library.brown.edu/",
  },
  {
    image: Fullstack,
    name: "Fullstack at Brown",
    title: "Developer",
    duration: "January 2024 - Present",
    location: "Providence, RI",
    link: "https://www.fullstackatbrown.com/projects/",
  },
];

const schools = [
  {
    image: BrownU,
    name: "Brown University",
    title:
      "Bachelor of Computer Engineering & Concurrent Master of Computer Science",
    duration: "Aug 2023 - May 2027",
    location: "Providence, RI",
    link: "https://www.brown.edu/",
  },
];

const headerStyle = {
  fontFamily: "Inconsolata, monospace",
  fontSize: "15px",
  fontWeight: 700,
};

function Resume() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#feffe9",
        padding: { xs: "10px", sm: "2px 20px" },
        border: "2px solid black",
      }}
    >
      <Typography
        sx={{
          ...headerStyle,
          fontWeight: 500,
          margin: "5px",
          fontSize: "35px",
          marginRight: "auto",
          marginTop: "3px",
        }}
      >
        Professional Experience
      </Typography>
      <Box
        sx={{
          width: "100%",
          padding: "0px 10px",
          marginTop: "10px",
          border: { xs: "2px solid black" },
          backgroundColor: "#b4dc87",
        }}
      >
        {schools.map((company, index) => (
          <ResumeCard company={company} key={index} />
        ))}
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          width: "100%",
          height: { xs: "650px", sm: "560px", md: "280px" },
          padding: "0 10px",
          margin: "10px 0px",
          border: { xs: "2px solid black" },
          backgroundColor: "#b4dc87",
        }}
      >
        {companies.map((company, index) => (
          <ResumeCard company={company} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default Resume;
