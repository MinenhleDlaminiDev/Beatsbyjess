import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { GalleryPage } from "./screens/GalleryPage/GalleryPage";
import { MuaPortfolio } from "./screens/MuaPortfolio/MuaPortfolio";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MuaPortfolio />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
