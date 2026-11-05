import { FEATURES } from "../data/content";

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">Built around your working day</p>
            <h2 id="features-title" className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              The whole day, in one place.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-body md:justify-self-end">
            From the first tank check to the final account, give every record a place to belong.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="rounded-2xl border border-sage-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage text-forest">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{feature.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
