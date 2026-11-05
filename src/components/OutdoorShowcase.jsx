import { Check } from "lucide-react";
import vanImage from "../assets/van-delivery.svg";
import { OUTDOOR_POINTS } from "../data/content";

export default function OutdoorShowcase() {
  return (
    <section aria-labelledby="outdoor-title" className="bg-white pb-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">Outdoor & van sales</p>
          <h2 id="outdoor-title" className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            Keep track beyond the forecourt.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">
            The sale doesn't end at the station. Give every delivery and collection a place in your records.
          </p>
          <ul className="mt-8 space-y-4">
            {OUTDOOR_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <Check size={20} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="order-1 rounded-3xl bg-sage p-6 md:p-10 lg:order-2">
          <img
            src={vanImage}
            alt="Illustration of a green delivery van with the Fuel Flow name and a flame mark"
            width="440"
            height="240"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
          <figcaption className="mx-auto mt-4 max-w-md rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-ink">Site delivery · PMS</p>
                <p className="mt-1 text-xs text-muted">04 Nov 2026 · 400 L × ₦1,000</p>
              </div>
              <span className="rounded-full bg-sage px-3 py-1 text-xs font-bold text-forest">Part paid</span>
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-sage-line pt-4">
              <div>
                <dt className="text-xs text-muted">Sale value</dt>
                <dd className="mt-1 font-extrabold text-ink">₦400,000</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Collected</dt>
                <dd className="mt-1 font-extrabold text-ink">₦300,000</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Balance</dt>
                <dd className="mt-1 font-extrabold text-ink">₦100,000</dd>
              </div>
            </dl>
            <p className="mt-4 text-[11px] text-muted">Illustrative delivery · included in the day's PMS sales.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
