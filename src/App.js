import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import TranslationPortfolio from "./pages/TranslationPortfolio";
import TranslationDetail from "./pages/TranslationDetail";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { height: "100%" },
          body: {
            height: "100%",
            margin: 0,
            fontFamily: "Inconsolata, monospace",
          },
          "#root": { minHeight: "100%", height: "auto" },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translations" element={<TranslationPortfolio />} />
        <Route path="/translations/:translationId" element={<TranslationDetail />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
