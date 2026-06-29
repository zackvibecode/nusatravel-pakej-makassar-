import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { ITINERARY } from "@/data/content";

export default function Itinerary() {
  return (
    <section id="itinerary" className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Aturcara Perjalanan"
          title={
            <>
              Itinerary <span className="text-brand-red">5 Hari 4 Malam</span>
            </>
          }
          subtitle="Aturcara dirancang rapi supaya setiap hari memberi pengalaman terbaik."
        />

        <div className="mx-auto mt-10 max-w-2xl">
          <ol className="relative space-y-3">
            {ITINERARY.map((item, i) => (
              <li key={item.day} className="relative">
                <div className="card p-5 transition-colors hover:border-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-charcoal text-2xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="badge border-brand-red/20 bg-brand-light text-brand-red">
                      {item.day}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold tracking-tight text-brand-charcoal sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500 sm:text-[13px]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
