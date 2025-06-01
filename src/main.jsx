import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ScrollTop } from "./components/ScrollTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ScrollTop />
  </StrictMode>
);
