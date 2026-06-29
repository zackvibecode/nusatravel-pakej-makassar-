import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { NORMAL_DATES, PREMIER_DATES, WHATSAPP_URL, type DateRow } from "@/data/content";

function seasonClass(season: string) {
  switch (season) {
    case "Cuti Sekolah":
      return "border-indigo-200 bg-indigo-50 text-indigo-600";
    case "Normal Date":
      return "border-gray-200 bg-gray-50 text-gray-600";
    default:
      return "border-amber-200 bg-amber-50 text-amber-600";
  }
}

// ---- Desktop table ----
function DateTable({ rows, title }: { rows: DateRow[]; title: string }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50/50 px-5 py-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
          {title}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-200 text-2xs uppercase tracking-wider text-gray-400">
              <th className="px-5 py-2.5 font-medium">Pergi</th>
              <th className="px-5 py-2.5 font-medium">Pulang</th>
              <th className="px-5 py-2.5 font-medium">Musim</th>
              <th className="px-5 py-2.5 font-medium">Asal</th>
              <th className="px-5 py-2.5 font-medium">Promo</th>
              <th className="px-5 py-2.5 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <tr key={`${r.depart}-${r.return}`} className="transition-colors hover:bg-gray-50/50">
                <td className="whitespace-nowrap px-5 py-3 font-semibold text-brand-charcoal">
                  {r.depart}
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-gray-600">
                  {r.return}
                </td>
                <td className="px-5 py-3">
                  <span className={`badge ${seasonClass(r.season)}`}>
                    {r.season}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-gray-400 line-through">
                  {r.originalPrice}
                </td>
                <td className="whitespace-nowrap px-5 py-3 text-sm font-bold text-brand-red">
                  {r.promoPrice}
                </td>
                <td className="px-5 py-3 text-right">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-2xs font-semibold text-gray-700 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Semak Seat
                    <Icon name="arrow-right" className="h-3 w-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---- Mobile cards ----
function DateCards({ rows, title }: { rows: DateRow[]; title: string }) {
  return (
    <div>
      <h3 className="mb-2.5 px-1 text-xs font-bold uppercase tracking-wider text-gray-400">
        {title}
      </h3>
      <div className="grid gap-2.5">
        {rows.map((r) => (
          <div
            key={`${r.depart}-${r.return}-m`}
            className="card p-3.5"
          >
            <div className="flex items-center justify-between">
              <span className={`badge ${seasonClass(r.season)}`}>
                {r.season}
              </span>
              <div className="text-right">
                <p className="text-2xs text-gray-400 line-through">
                  {r.originalPrice}
                </p>
                <p className="text-sm font-bold text-brand-red">
                  {r.promoPrice}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
              <div>
                <p className="text-2xs text-gray-400">Pergi</p>
                <p className="font-semibold text-brand-charcoal">{r.depart}</p>
              </div>
              <Icon name="arrow-right" className="h-3.5 w-3.5 text-gray-300" />
              <div className="text-right">
                <p className="text-2xs text-gray-400">Pulang</p>
                <p className="font-semibold text-brand-charcoal">{r.return}</p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-3 w-full !py-2 !text-2xs"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              Semak Seat
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DepartureDates() {
  return (
    <section id="tarikh-pelepasan" className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Jadual Pelepasan"
          title={
            <>
              Tarikh Pelepasan <span className="text-brand-red">2026</span>
            </>
          }
          subtitle="Pilih tarikh yang sesuai dan WhatsApp team Nusatravel untuk semak kekosongan seat terkini."
        />

        {/* Desktop: tables */}
        <div className="mt-10 hidden space-y-5 md:block">
          <DateTable rows={NORMAL_DATES} title="Normal Date" />
          <DateTable rows={PREMIER_DATES} title="Premier / Cuti Sekolah Date" />
        </div>

        {/* Mobile: cards */}
        <div className="mt-10 space-y-6 md:hidden">
          <DateCards rows={NORMAL_DATES} title="Normal Date" />
          <DateCards rows={PREMIER_DATES} title="Premier / Cuti Sekolah Date" />
        </div>
      </div>
    </section>
  );
}
