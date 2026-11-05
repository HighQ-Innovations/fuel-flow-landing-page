import { DEMO_MAILTO } from "../data/content";
import { trackEvent } from "../lib/analytics";

export default function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-sage px-8 py-12 md:flex-row md:items-center md:px-14">
          <h2 id="cta-title" className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Bring clarity to your next daily close.
          </h2>
          <a
            href={DEMO_MAILTO}
            onClick={() => trackEvent("Lead", { content_name: "Request a demo (closing)" })}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-forest px-6 py-3.5 font-bold text-white hover:bg-forest-soft"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}
