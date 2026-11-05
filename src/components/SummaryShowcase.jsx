import { Check, Download } from "lucide-react";
import { SUMMARY_POINTS, SUMMARY_TABLE } from "../data/content";

export default function SummaryShowcase() {
  const { title, subtitle, date, note, columns, rows, total } = SUMMARY_TABLE;

  return (
    <section
      id="summaries"
      aria-labelledby="summaries-title"
      className="bg-white pb-20 md:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <figure className="min-w-0 rounded-3xl bg-sage p-3 sm:p-5 md:p-8">
          <figcaption className="sr-only">
            Example daily sales summary exported to Excel
          </figcaption>
          <div className="rounded-2xl bg-white p-4 shadow-sm md:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1d6f42] text-sm font-extrabold text-white"
                  aria-hidden="true"
                >
                  X
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="text-xs text-muted">{subtitle}</p>
                </div>
              </div>
              <Download size={18} className="text-muted" aria-hidden="true" />
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-sage-line">
              <div className="flex justify-between gap-2 bg-mist px-3 py-2.5 text-xs text-body sm:px-4">
                <span className="font-bold">{date}</span>
                <span>{note}</span>
              </div>
              <table className="w-full min-w-[260px] text-left text-xs sm:text-sm">
                <thead className="bg-sage text-xs uppercase tracking-wide text-body">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={column}
                        scope="col"
                        className={`px-2 py-2.5 font-semibold sm:px-4 sm:py-3 ${index > 0 ? "text-right" : ""}`}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="font-mono text-ink">
                  {rows.map((row) => (
                    <tr key={row[0]} className="border-t border-sage-line">
                      {row.map((cell, index) => (
                        <td
                          key={index}
                          className={`px-2 py-2.5 sm:px-4 sm:py-3 ${index > 0 ? "text-right" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-sage-line bg-sage font-bold">
                    {total.map((cell, index) => (
                      <td
                        key={index}
                        className={`px-2 py-2.5 sm:px-4 sm:py-3 ${index > 0 ? "text-right" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between text-xs text-muted">
              <span className="font-bold text-body">Daily summary</span>
              <span>Illustrative data</span>
            </div>
          </div>
        </figure>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest">
            Summaries & exports
          </p>
          <h2
            id="summaries-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            Your day, ready for the spreadsheet.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">
            Turn station records into a clear daily summary your finance team
            can work with.
          </p>
          <ul className="mt-8 space-y-4">
            {SUMMARY_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <Check
                  size={20}
                  className="mt-0.5 shrink-0 text-forest"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
