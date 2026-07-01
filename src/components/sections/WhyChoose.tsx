import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { WHY_CHOOSE } from "@/data/content";

export default function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Kenapa Pakej Ini"
          title={
            <>
              Semua Yang Anda Perlu{" "}
              <span className="text-brand-red">Dalam Satu Pakej</span>
            </>
          }
          subtitle="Dirancang supaya anda boleh fokus nikmati percutian, bukan urus logistik."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item) => {
            const isFree = item.title.toLowerCase().includes("free");
            return (
            <div
              key={item.title}
              className={`group p-6 transition-colors ${
                isFree
                  ? "bg-brand-light ring-1 ring-inset ring-brand-red/20 hover:bg-brand-light"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div
                className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                  isFree
                    ? "border-brand-red/30 bg-brand-red text-white"
                    : "border-gray-200 bg-white text-brand-charcoal group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white"
                }`}
              >
                <Icon name={item.icon} className="h-4 w-4" />
              </div>
              <h3
                className={`text-sm font-bold tracking-tight ${
                  isFree ? "text-brand-red" : "text-brand-charcoal"
                }`}
              >
                {item.title}
              </h3>
              <p className={`mt-1.5 text-xs leading-relaxed ${isFree ? "text-brand-dark/80" : "text-gray-500"}`}>
                {item.desc}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
