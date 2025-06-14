import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const importAll = (r) => r.keys().map(r);
const imagesContext = require.context(
  "../static/photos/",
  false,
  /\.(jpe?g|png|gif|webp|avif)$/i
);

const importedImages = importAll(imagesContext);

const headerStyle = {
  fontFamily: "Inconsolata, monospace",
  fontSize: "20px",
  fontWeight: 600,
};

function Photos() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const formattedPhotos = importedImages.map((imageModule, index) => ({
      image: imageModule,
      name: `photo-${index + 1}`,
    }));
    setPhotoList(formattedPhotos);
  }, []);

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
        Favorite Photos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflowY: "auto",
          width: "100%",
          height: { xs: "850px", sm: "700px", md: "394px" },
          padding: "0px 10px",
          marginTop: "10px",
          border: { xs: "2px solid black" },
          backgroundColor: "#b4dc87",
        }}
      >
        {photoList.map((photo, index) => (
          <Box
            key={index}
            sx={{
              width: 200,
              height: 200,
              backgroundColor: "#feffe9",
              border: "1.5px solid black",
              margin: 2,
              position: "relative",
              "&:hover img": {
                filter: "brightness(80%)",
              },
            }}
          >
            <img
              src={photo.image}
              alt={photo.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 0.3s",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "4px 8px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Photos;
