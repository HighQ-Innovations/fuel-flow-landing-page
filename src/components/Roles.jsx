import { ArrowUpRight } from "lucide-react";
import { ROLES } from "../data/content";

export default function Roles() {
  return (
    <section id="roles" aria-labelledby="roles-title" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">A shared view, a clear role</p>
        <h2 id="roles-title" className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          Built for the people behind the station.
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role) => {
            const Icon = role.icon;
            return (
              <li
                key={role.title}
                className="flex flex-col rounded-2xl border border-sage-line bg-white p-6"
              >
                <div className="flex items-start justify-between">
                  <Icon size={24} className="text-forest" aria-hidden="true" />
                  <ArrowUpRight size={18} className="text-forest/60" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{role.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{role.text}</p>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-forest">{role.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
