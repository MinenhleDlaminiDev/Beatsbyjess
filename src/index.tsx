import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MuaPortfolio } from "./screens/MuaPortfolio/MuaPortfolio";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MuaPortfolio />
  </StrictMode>,
);
