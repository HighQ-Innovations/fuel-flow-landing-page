import { ArrowRight } from "lucide-react";
import { SIGN_IN_URL } from "../data/content";

export default function CallToAction() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-8 py-14 text-center text-white shadow-xl md:px-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-flame/20" />
          <h2 className="relative text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready to close your books on time?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            Sign in to start recording tanks, pumps and daily accounts, or ask your administrator to
            set up your station.
          </p>
          <a
            href={SIGN_IN_URL}
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-brand-deep shadow-lg hover:bg-brand-50"
          >
            Sign in to Fuel Flow
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
