import { CheckCircle2 } from "lucide-react";

export default function Showcase({ id, eyebrow, title, text, points, image, alt, reverse = false, background = "bg-brand-50" }) {
  return (
    <section id={id} className={`${background} py-20 md:py-28`}>
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-dark">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">{text}</p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-ink/80">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-brand-dark" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-xl shadow-brand-deep/10">
          <img src={image} alt={alt} className="w-full rounded-2xl" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
