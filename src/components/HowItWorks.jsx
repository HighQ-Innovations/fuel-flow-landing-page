import { STEPS } from "../data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-deep py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-100">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Four steps from reading to report
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-4xl font-extrabold text-brand">{step.number}</span>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
