import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SiteBackground from "../components/SiteBackground";
import TranslationsNav from "../components/TranslationsNav";
import { translationWorks, isTranslationComplete } from "../data/translations";

const arabicTitleSx = {
  fontFamily: '"Noto Sans Arabic", "Geeza Pro", "Arial Unicode MS", sans-serif',
  direction: "rtl",
  textAlign: "right",
  fontSize: { xs: "1.15rem", sm: "1.35rem" },
  fontWeight: 600,
  lineHeight: 1.5,
  color: "#1a1a1a",
};

const excerptClampSx = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

function TranslationCard({ work }) {
  const complete = isTranslationComplete(work);
  const inner = (
    <Box
      sx={{
        border: "2px solid black",
        backgroundColor: "#feffe9",
        padding: { xs: "16px", sm: "20px 22px" },
        display: "flex",
        flexDirection: "column",
        gap: 1.1,
        transition: "box-shadow 0.2s",
        height: "100%",
        boxSizing: "border-box",
        ...(complete && {
          cursor: "pointer",
          "&:hover": {
            boxShadow: "4px 4px 0 #86a953",
          },
        }),
        ...(!complete && { opacity: 0.92 }),
      }}
    >
      <Chip
        label="Poetry · Arabic → English"
        size="small"
        sx={{
          alignSelf: "flex-start",
          fontFamily: "Inconsolata, monospace",
          fontSize: "11px",
          height: 24,
          border: "1px solid black",
          backgroundColor: "#d4e8b8",
        }}
      />
      <Typography sx={arabicTitleSx}>{work.titleAr}</Typography>
      <Typography
        sx={{
          fontFamily: "Inconsolata, monospace",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          fontWeight: 600,
          color: "#2d3d1f",
        }}
      >
        {work.titleEn}
      </Typography>
      {(work.poetAr || work.poetEn) && (
        <Typography
          sx={{
            fontFamily: "Inconsolata, monospace",
            fontSize: "13px",
            color: "#444",
          }}
        >
          {work.poetEn && <span>{work.poetEn}</span>}
          {work.poetAr && work.poetEn && " · "}
          {work.poetAr && (
            <Box
              component="span"
              sx={{
                ...arabicTitleSx,
                fontSize: "13px",
                display: "inline",
              }}
            >
              {work.poetAr}
            </Box>
          )}
        </Typography>
      )}
      {work.listingExcerptAr && (
        <Box sx={{ mt: 0.25 }}>
          <Typography
            sx={{
              fontFamily: "Inconsolata, monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#666",
              mb: 0.5,
            }}
          >
            Original (preview)
          </Typography>
          <Typography
            sx={{
              ...arabicTitleSx,
              fontSize: "14px",
              fontWeight: 400,
              whiteSpace: "pre-line",
              ...excerptClampSx,
            }}
          >
            {work.listingExcerptAr}
          </Typography>
        </Box>
      )}
      {work.listingExcerptEn && (
        <Box>
          <Typography
            sx={{
              fontFamily: "Inconsolata, monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#666",
              mb: 0.5,
            }}
          >
            Translation (preview)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inconsolata, monospace",
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: 1.55,
              whiteSpace: "pre-line",
              ...excerptClampSx,
            }}
          >
            {work.listingExcerptEn}
          </Typography>
        </Box>
      )}
      {complete && (
        <Typography
          sx={{
            fontFamily: "Inconsolata, monospace",
            fontSize: "12px",
            fontWeight: 600,
            color: "#4a6b2e",
            mt: "auto",
            pt: 0.5,
          }}
        >
          Open piece →
        </Typography>
      )}
      {work.notes && !complete && (
        <Typography
          sx={{
            fontFamily: "Inconsolata, monospace",
            fontSize: "12px",
            color: "#555",
            borderTop: "1px dashed #86a953",
            pt: 1,
            mt: 0.5,
          }}
        >
          {work.notes}
        </Typography>
      )}
    </Box>
  );

  if (complete) {
    return (
      <Box
        component={RouterLink}
        to={`/translations/${work.id}`}
        sx={{
          textDecoration: "none",
          color: "inherit",
          minWidth: 0,
        }}
      >
        {inner}
      </Box>
    );
  }

  return <Box sx={{ minWidth: 0 }}>{inner}</Box>;
}

function TranslationPortfolio() {
  return (
    <SiteBackground
      panelSx={{
        width: { xs: "min(95vw, 380px)", sm: "min(92vw, 760px)", md: "1000px", lg: "1040px" },
        height: "auto",
        minHeight: { xs: "720px", md: "min(90vh, 880px)" },
        maxHeight: { xs: "none", md: "92vh" },
        overflow: "hidden",
      }}
    >
      {({ handleClose }) => (
        <>
          <TranslationsNav mode="list" handleClose={handleClose} />
          <Box
            sx={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#feffe9",
              border: "2px solid black",
              borderTop: "none",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                padding: { xs: "18px 14px", sm: "24px 28px" },
                borderBottom: "2px solid black",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inconsolata, monospace",
                  fontSize: { xs: "1.15rem", sm: "1.4rem" },
                  fontWeight: 700,
                }}
              >
                Translation portfolio
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inconsolata, monospace",
                  fontSize: "13px",
                  color: "#444",
                  mt: 0.75,
                  maxWidth: "52rem",
                }}
              >
                Arabic poetry into English. Click a card to read the full translation.
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                padding: { xs: "14px", sm: "22px 24px 28px" },
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: { xs: "14px", sm: "18px" },
                alignContent: "start",
              }}
            >
              {translationWorks.map((work) => (
                <TranslationCard key={work.id} work={work} />
              ))}
            </Box>
          </Box>
        </>
      )}
    </SiteBackground>
  );
}

export default TranslationPortfolio;
