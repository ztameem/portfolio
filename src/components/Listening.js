import { useEffect, useState } from "react";
import { getNowPlayingItem, getRecentlyPlayedItem } from "./Spotify";
import offline from "../static/assets/offline.avif";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function truncate(s) {
  return typeof s === "string" && s.length > 20
    ? s.substring(0, 20) + "..."
    : s;
}

function Listening() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const nowPlayingResult = await getNowPlayingItem();

        if (nowPlayingResult && nowPlayingResult.is_playing) {
          setCurrentlyPlaying(nowPlayingResult);
          setLastPlayed(null);
        } else {
          setCurrentlyPlaying(null);

          if (
            !lastPlayed ||
            (currentlyPlaying && !currentlyPlaying.is_playing)
          ) {
            const recentlyPlayedItem = await getRecentlyPlayedItem();
            setLastPlayed(recentlyPlayedItem);
          }
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        if (currentlyPlaying !== null) setCurrentlyPlaying(null);
        if (lastPlayed !== null) setLastPlayed(null);
      } finally {
        if (initialLoad) {
          setInitialLoad(false);
        }
      }
    };

    fetchData();

    intervalId = setInterval(fetchData, 15000); // 15 seconds every reload

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentlyPlaying, lastPlayed, initialLoad]);

  const displayTrack =
    currentlyPlaying && currentlyPlaying.is_playing
      ? currentlyPlaying.item
      : lastPlayed;

  const titleText =
    currentlyPlaying && currentlyPlaying.is_playing
      ? "Currently Listening To..."
      : "Last Played Song...";

  const hasDisplayTrack = displayTrack && Object.keys(displayTrack).length > 0;

  return (
    <Box
      sx={{
        display: "flex",
        margin: "20px 0px",
        width: { xs: "100%", md: "200px" },
        flexDirection: "column",
        p: 1,
        border: "2px solid black",
        backgroundColor: "#e4f8ba",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Inconsolata, monospace" }}
        >
          {titleText}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {initialLoad ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Inconsolata, monospace" }}
          >
            Loading...
          </Typography>
        ) : (
          <>
            <Box
              component="img"
              src={
                hasDisplayTrack &&
                displayTrack.album &&
                displayTrack.album.images
                  ? displayTrack.album.images[2].url
                  : offline
              }
              alt={
                hasDisplayTrack && displayTrack.album
                  ? `${displayTrack.album.name} album art`
                  : "Nothing"
              }
              sx={{ width: 64, height: 64, border: "2px solid black", mr: 1 }}
            />
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Inconsolata, monospace",
                  fontWeight: "bold",
                  mb: 0.5,
                }}
              >
                {hasDisplayTrack ? (
                  <a
                    href={displayTrack.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit" }}
                  >
                    {truncate(displayTrack.name)}
                  </a>
                ) : (
                  "Nothing"
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Inconsolata, monospace" }}
              >
                {hasDisplayTrack && displayTrack.artists
                  ? truncate(displayTrack.artists[0].name)
                  : "Check Later"}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Listening;
