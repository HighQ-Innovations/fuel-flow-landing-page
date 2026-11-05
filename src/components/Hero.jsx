import { ArrowRight, Check } from "lucide-react";
import pumpImage from "../assets/hero-pump.svg";
import { DEMO_MAILTO, SIGN_IN_URL } from "../data/content";
import { trackEvent } from "../lib/analytics";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-sage pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-forest">
            <span className="h-2 w-2 rounded-sm bg-forest" aria-hidden="true" />
            Daily records. Clearer accounts.
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl"
          >
            Know where every litre and naira went.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            Bring tank records, pump readings and daily accounts together. Close each day with a clear
            view of your filling station.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SIGN_IN_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-6 py-3.5 font-bold text-white hover:bg-forest-soft"
            >
              Get started
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-forest/25 bg-white px-6 py-3.5 font-bold text-forest hover:border-forest/50"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-body">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-forest" aria-hidden="true" />
              Excel-ready summaries
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-forest" aria-hidden="true" />
              Built for station teams
            </li>
          </ul>
          <a
            href={DEMO_MAILTO}
            onClick={() => trackEvent("Lead", { content_name: "Request a demo (hero)" })}
            className="mt-6 inline-flex text-sm font-bold text-forest underline underline-offset-4"
          >
            Prefer a walkthrough? Request a demo
          </a>
        </div>

        <div className="relative rounded-3xl bg-[#e6efe4] p-6 md:p-10">
          <article
            aria-label="Example daily summary"
            className="relative rounded-2xl bg-white p-6 shadow-xl shadow-forest/10 md:p-7"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-ink">Daily summary</h2>
              <span className="text-lg leading-none text-muted" aria-hidden="true">
                •••
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">04 Nov 2026 · All pumps</p>

            <p className="mt-6 text-xs font-medium text-muted">Total sales</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">₦3,340,000</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted">Volume sold</p>
                <p className="mt-1 text-lg font-bold text-ink">3,200 L</p>
              </div>
              <div>
                <p className="text-xs text-muted">Products</p>
                <p className="mt-1 text-sm font-bold text-ink">PMS · AGO · DPK</p>
              </div>
            </div>

            <div className="mt-6 flex h-2.5 overflow-hidden rounded-full bg-sage-line" aria-hidden="true">
              <span className="w-[75%] bg-forest" />
              <span className="w-[18%] bg-lime" />
            </div>
            <p className="mt-4 text-[11px] text-muted">Illustrative records, not live station data.</p>
          </article>

          <img
            src={pumpImage}
            alt="Illustration of a fuel pump with a green display and orange nozzle"
            width="240"
            height="280"
            className="absolute -bottom-6 -right-2 w-28 md:w-40"
          />
          <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-forest/70 md:text-left">
            A clearer picture, every day.
          </p>
        </div>
      </div>
    </section>
  );
}
