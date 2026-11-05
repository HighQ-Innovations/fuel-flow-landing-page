// Meta (Facebook) Pixel and cookie consent.
// The pixel only loads after the visitor accepts cookies, as required for
// personal data processing under Nigeria's Data Protection Act 2023.

const CONSENT_KEY = "fuelflow-cookie-consent";
const PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

export const isPixelConfigured = Boolean(PIXEL_ID);

export function getConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function saveConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage can be blocked; the banner will simply appear again next visit.
  }
}

let pixelLoaded = false;

export function initFacebookPixel() {
  if (!PIXEL_ID || pixelLoaded || typeof window === "undefined") return;
  pixelLoaded = true;

  if (!window.fbq) {
    const fbq = (window.fbq = function () {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    });
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, params);
  }
}
