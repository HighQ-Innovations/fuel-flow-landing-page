import { AUDIENCES } from "../data/content";

export default function AudienceStrip() {
  return (
    <section aria-label="Who Fuel Flow is for" className="border-y border-sage-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-sm md:flex-row">
        <p className="text-muted">One daily record. A shared view for</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-bold text-ink">
          {AUDIENCES.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
