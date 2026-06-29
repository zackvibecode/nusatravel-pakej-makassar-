import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { HIGHLIGHTS } from "@/data/content";

export default function TourHighlights() {
  return (
    <section id="tempat-lawatan" className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Tempat Lawatan"
          title={
            <>
              12 Tarikan Utama{" "}
              <span className="text-brand-red">Di Makassar</span>
            </>
          }
          subtitle="Setiap hari diisi dengan lawatan menarik — dari alam, sejarah, religi hingga pengalaman eksklusif."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-gray-300 hover:shadow-soft"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-brand-charcoal transition-colors group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                <Icon name={h.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-semibold leading-tight tracking-tight text-brand-charcoal sm:text-[13px]">
                {h.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
