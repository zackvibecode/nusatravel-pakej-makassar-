import { EXCLUDES, PAYMENT_DETAILS, PRICE_DETAILS } from "@/data/content";
import Icon from "../ui/Icon";
import SectionTitle from "../ui/SectionTitle";

export default function PriceDetails() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Detail Harga"
          title={
            <>
              Harga Pakej <span className="text-brand-red">Lengkap</span>
            </>
          }
          subtitle="Ringkasan harga asal, harga promo, bayaran deposit dan caj yang tidak termasuk."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRICE_DETAILS.map((item) => (
            <div key={item.title} className="card overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50/70 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-100">
                <div className="px-5 py-5">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-gray-400">
                    Harga Asal
                  </p>
                  <p className="mt-1 text-lg font-bold text-gray-400 line-through">
                    {item.originalPrice}
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="text-2xs font-semibold uppercase tracking-wider text-brand-red">
                    Harga Promo
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-brand-red">
                    {item.promoPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              Bayaran & Polisi Harga
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {PAYMENT_DETAILS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600 sm:text-[13px]">
                  <Icon
                    name="check"
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              Tidak Termasuk Dalam Harga
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {EXCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600 sm:text-[13px]">
                  <Icon
                    name="cross"
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-red"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
