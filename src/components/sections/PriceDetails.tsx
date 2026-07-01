import { PAYMENT_DETAILS } from "@/data/content";
import Icon from "../ui/Icon";
import SectionTitle from "../ui/SectionTitle";

export default function PriceDetails() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Bayaran"
          title={
            <>
              Polisi <span className="text-brand-red">Bayaran</span>
            </>
          }
          subtitle="Deposit, baki bayaran dan maklumat penting sebelum tempah."
        />

        <div className="mx-auto mt-10 max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}
