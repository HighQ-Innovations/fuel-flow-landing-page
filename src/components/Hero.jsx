import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "../assets/hero-dashboard.svg";
import { SIGN_IN_URL } from "../data/content";

const TRUST_POINTS = [
  "Tanks, pumps and accounts in one place",
  "Excel and PDF exports with totals",
  "Built for station, outdoor and head office teams",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50 pt-28 pb-20 md:pt-36">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-deep shadow-sm">
            Daily records for filling stations
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Know every litre, every naira, <span className="text-brand-deep">every day.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Fuel Flow replaces paper logbooks. Record tanks, pump readings and daily cash in one
            place, then see clean summaries and export them to Excel in a click.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={SIGN_IN_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark"
            >
              Get started
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-brand-deep/20 bg-white px-6 py-3.5 font-bold text-brand-deep hover:border-brand-deep/40"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-8 space-y-2">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                <CheckCircle2 size={18} className="text-brand-dark" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Fuel Flow daily summary dashboard showing tank sales, expenses, grand total and a weekly litres chart, beside a fuel pump"
            className="relative w-full drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
