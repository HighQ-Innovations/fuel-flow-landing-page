import { STEPS } from "../data/content";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-forest py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">How it works</p>
        <h2 id="how-title" className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
          A simple rhythm for every day.
        </h2>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative border-t border-white/20 pt-6">
              <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-white/25 px-2 font-mono text-xs text-lime">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
