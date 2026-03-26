import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SiteBackground from "../components/SiteBackground";
import TranslationsNav from "../components/TranslationsNav";
import {
  getTranslationById,
  isTranslationComplete,
} from "../data/translations";

const arabicTitleSx = {
  fontFamily: '"Noto Sans Arabic", "Geeza Pro", "Arial Unicode MS", sans-serif',
  direction: "rtl",
  textAlign: "right",
  fontSize: { xs: "1.25rem", sm: "1.5rem" },
  fontWeight: 600,
  lineHeight: 1.45,
  color: "#1a1a1a",
};

const sectionLabelSx = {
  fontFamily: "Inconsolata, monospace",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#666",
  mb: 0.75,
};

function firstNLines(text, n) {
  if (!text || !String(text).trim()) return "";
  return String(text).split("\n").slice(0, n).join("\n");
}

function TranslationDetail() {
  const { translationId } = useParams();
  const work = getTranslationById(translationId);
  const [sideBySideOpen, setSideBySideOpen] = useState(false);

  if (!work || !isTranslationComplete(work)) {
    return <Navigate to="/translations" replace />;
  }

  const hasFullArabic = Boolean(
    work.originalExcerpt && String(work.originalExcerpt).trim(),
  );
  const hasListingArabic = Boolean(
    work.listingExcerptAr && String(work.listingExcerptAr).trim(),
  );

  const showOriginalSection = work.sideBySideExcerpt
    ? hasFullArabic || hasListingArabic
    : hasFullArabic;

  const useSideBySide = Boolean(
    work.sideBySideExcerpt &&
    work.translationBody?.trim() &&
    (hasFullArabic || hasListingArabic),
  );

  const originalPreviewLines = (() => {
    if (!work.sideBySideExcerpt) {
      return work.originalExcerpt || "";
    }
    if (hasFullArabic) {
      return firstNLines(work.originalExcerpt, 2);
    }
    return firstNLines(work.listingExcerptAr, 2);
  })();

  const arabicInModal = hasFullArabic
    ? work.originalExcerpt
    : hasListingArabic
      ? work.listingExcerptAr
      : "";
  const arabicModalIsPartial = !hasFullArabic && hasListingArabic;

  return (
    <SiteBackground
      panelSx={{
        width: {
          xs: "min(95vw, 380px)",
          sm: "min(92vw, 760px)",
          md: "1000px",
          lg: "1040px",
        },
        height: "auto",
        minHeight: { xs: "720px", md: "min(90vh, 880px)" },
        maxHeight: { xs: "none", md: "92vh" },
        overflow: "hidden",
      }}
    >
      {({ handleClose }) => (
        <>
          <TranslationsNav mode="detail" handleClose={handleClose} />
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
                flex: 1,
                overflowY: "auto",
                padding: { xs: "18px 14px", sm: "24px 28px 32px" },
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              <Box
                sx={{
                  borderBottom: "2px solid black",
                  pb: 2,
                }}
              >
                <Typography sx={sectionLabelSx}>Title — Arabic</Typography>
                <Typography sx={{ ...arabicTitleSx, mb: 2 }}>
                  {work.titleAr}
                </Typography>
                <Typography sx={sectionLabelSx}>Title — English</Typography>
                <Typography
                  sx={{
                    fontFamily: "Inconsolata, monospace",
                    fontSize: { xs: "1.15rem", sm: "1.35rem" },
                    fontWeight: 700,
                    color: "#2d3d1f",
                  }}
                >
                  {work.titleEn}
                </Typography>
                {(work.poetAr || work.poetEn) && (
                  <Typography
                    sx={{
                      fontFamily: "Inconsolata, monospace",
                      fontSize: "14px",
                      color: "#444",
                      mt: 1.25,
                    }}
                  >
                    {work.poetEn && <span>{work.poetEn}</span>}
                    {work.poetAr && work.poetEn && " · "}
                    {work.poetAr && (
                      <Box
                        component="span"
                        sx={{
                          ...arabicTitleSx,
                          fontSize: "14px",
                          display: "inline",
                        }}
                      >
                        {work.poetAr}
                      </Box>
                    )}
                  </Typography>
                )}
              </Box>

              {showOriginalSection && (
                <Box>
                  <Typography sx={sectionLabelSx}>
                    Original (excerpt)
                  </Typography>
                  <Typography
                    sx={{
                      ...arabicTitleSx,
                      fontSize: "15px",
                      fontWeight: 400,
                      whiteSpace: "pre-line",
                      lineHeight: 1.65,
                    }}
                  >
                    {originalPreviewLines}
                  </Typography>
                  {useSideBySide && (
                    <Button
                      variant="outlined"
                      onClick={() => setSideBySideOpen(true)}
                      sx={{
                        mt: 1.5,
                        fontFamily: "Inconsolata, monospace",
                        textTransform: "none",
                        borderColor: "#1a1a1a",
                        color: "#2d3d1f",
                        fontWeight: 600,
                        "&:hover": {
                          borderColor: "#86a953",
                          backgroundColor: "rgba(134, 169, 83, 0.12)",
                        },
                      }}
                    >
                      Side by side view
                    </Button>
                  )}
                </Box>
              )}

              <Box>
                <Typography sx={sectionLabelSx}>Translation</Typography>
                <Typography
                  sx={{
                    fontFamily: "Inconsolata, monospace",
                    fontSize: "15px",
                    fontStyle: "italic",
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                    color: "#1a1a1a",
                  }}
                >
                  {work.translationBody}
                </Typography>
              </Box>

              {work.notes && String(work.notes).trim() && (
                <Typography
                  sx={{
                    fontFamily: "Inconsolata, monospace",
                    fontSize: "12px",
                    color: "#555",
                    borderTop: "1px dashed #86a953",
                    pt: 2,
                  }}
                >
                  {work.notes}
                </Typography>
              )}
            </Box>
          </Box>

          <Dialog
            open={sideBySideOpen}
            onClose={() => setSideBySideOpen(false)}
            maxWidth="lg"
            fullWidth
            scroll="paper"
            PaperProps={{
              sx: {
                height: { xs: "100%", sm: "min(92vh, 900px)" },
                maxHeight: "92vh",
                border: "2px solid black",
                borderRadius: 0,
                backgroundColor: "#feffe9",
              },
            }}
          >
            <DialogTitle
              sx={{
                fontFamily: "Inconsolata, monospace",
                fontSize: "1rem",
                fontWeight: 700,
                borderBottom: "2px solid black",
                py: 1.5,
                pr: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                flexShrink: 0,
              }}
            >
              Side by side {arabicModalIsPartial ? "view" : "— full excerpt"}
              <IconButton
                aria-label="close"
                onClick={() => setSideBySideOpen(false)}
                sx={{ color: "#1a1a1a" }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent
              sx={{
                p: 0,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                flex: 1,
                minHeight: 0,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minHeight: { xs: "200px", md: 0 },
                  overflow: "auto",
                  p: { xs: 2, sm: 2.5 },
                  borderRight: { md: "2px solid black" },
                  borderBottom: { xs: "2px solid black", md: "none" },
                  boxSizing: "border-box",
                }}
              >
                <Typography sx={{ ...sectionLabelSx, color: "#444" }}>
                  English
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inconsolata, monospace",
                    fontSize: "14px",
                    fontStyle: "italic",
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                    color: "#1a1a1a",
                  }}
                >
                  {work.translationBody}
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minHeight: { xs: "200px", md: 0 },
                  overflow: "auto",
                  p: { xs: 2, sm: 2.5 },
                  backgroundColor: "rgba(134, 169, 83, 0.06)",
                  boxSizing: "border-box",
                }}
              >
                <Typography sx={{ ...sectionLabelSx, color: "#444" }}>
                  Arabic
                </Typography>
                {arabicModalIsPartial && (
                  <Typography
                    sx={{
                      fontFamily: "Inconsolata, monospace",
                      fontSize: "11px",
                      color: "#666",
                      mb: 1.25,
                      lineHeight: 1.5,
                    }}
                  >
                    Opening lines only here.
                  </Typography>
                )}
                <Typography
                  sx={{
                    ...arabicTitleSx,
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                  }}
                >
                  {arabicInModal}
                </Typography>
              </Box>
            </DialogContent>
          </Dialog>
        </>
      )}
    </SiteBackground>
  );
}

export default TranslationDetail;
