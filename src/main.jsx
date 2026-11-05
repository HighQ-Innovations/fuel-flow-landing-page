import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { getConsent, initFacebookPixel } from "./lib/analytics";
import "./index.css";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The page is prerendered at build time, so hydrate the existing HTML when present.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// Returning visitors who already accepted cookies get the pixel straight away.
if (getConsent() === "accepted") {
  initFacebookPixel();
}
