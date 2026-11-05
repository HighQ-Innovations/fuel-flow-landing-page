import { useEffect, useState } from "react";
import { getConsent, initFacebookPixel, isPixelConfigured, saveConsent } from "../lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  if (!visible || !isPixelConfigured) return null;

  const choose = (value) => {
    saveConsent(value);
    if (value === "accepted") initFacebookPixel();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-sage-line bg-white p-5 shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-body">
          We use cookies and the Meta Pixel to measure visits and improve our marketing. You can decline and
          still use this site.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-lg border border-forest/25 px-5 py-2.5 text-sm font-bold text-forest hover:border-forest/50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-lg bg-forest px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-soft"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
