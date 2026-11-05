import { ROLES } from "../data/content";
import pumpIcon from "../assets/role-pump.svg";

export default function Roles() {
  return (
    <section id="roles" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-dark">
            Roles
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Each team sees what it needs
          </h2>
          <p className="mt-4 text-lg text-ink/65">
            Access is set by role, so station staff, outdoor sales and head
            office each work with the records that matter to them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ROLES.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="flex gap-5 rounded-2xl border border-gray-200 p-6 transition hover:border-brand"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-deep text-white">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{role.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/65">
                    {role.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-ink/55">
          <img src={pumpIcon} alt="" className="h-10 w-10" />
          Built around the way filling stations run their day.
        </div>
      </div>
    </section>
  );
}
