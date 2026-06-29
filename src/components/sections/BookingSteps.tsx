import SectionTitle from "../ui/SectionTitle";
import { BOOKING_STEPS } from "@/data/content";

export default function BookingSteps() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Mudah & Pantas"
          title={
            <>
              Cara <span className="text-brand-red">Tempahan</span>
            </>
          }
          subtitle="Hanya 5 langkah mudah untuk sahkan seat anda."
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {BOOKING_STEPS.map((step, i) => (
              <div key={step} className="relative card p-4 text-center">
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-charcoal text-2xs font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold leading-snug tracking-tight text-brand-charcoal">
                  {step}
                </p>
                {i < BOOKING_STEPS.length - 1 && (
                  <span className="absolute right-[-8px] top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gray-200 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
