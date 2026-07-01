import Image from "next/image";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { SITE } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle accent */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-red/5 blur-3xl" />

      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left — Content */}
          <div className="animate-fade-up">
            {/* Main headline */}
            <h1 className="leading-[1.02] tracking-tightest">
              <span className="block text-5xl font-extrabold uppercase text-brand-charcoal sm:text-6xl lg:text-7xl">
                Pakej Makassar
              </span>
              <span className="mt-1 block text-5xl font-extrabold uppercase text-brand-red sm:text-6xl lg:text-7xl">
                5 Hari 4 Malam
              </span>
              <span className="mt-2 block text-2xl font-bold uppercase text-brand-charcoal/80 sm:text-3xl lg:text-4xl">
                2026
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base font-normal text-gray-600 sm:text-lg">
              Flight, Hotel, Makan & Lawatan Semua Diuruskan
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              Sesuai untuk family, first timer dan peserta yang nak travel santai
              tanpa pening urus itinerary sendiri.
            </p>

            {/* FREE Phinisi highlight */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-brand-red/25 bg-brand-light px-3.5 py-2 text-xs font-semibold text-brand-dark sm:text-sm">
              <Icon name="anchor" className="h-4 w-4 flex-shrink-0 text-brand-red" />
              FREE Makan Malam & Minum Petang di Atas Kapal Phinisi Ghinayah
            </div>

            {/* Price + CTA row */}
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="rounded-xl border border-brand-red/20 bg-white px-5 py-4 shadow-soft">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-medium text-gray-500">Dari</span>
                  <span className="text-4xl font-extrabold tracking-tight text-brand-red sm:text-5xl">
                    {SITE.priceFrom}
                  </span>
                  <span className="text-sm font-medium text-gray-400">/ seorang</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-gray-600 sm:text-sm">
                  <Icon name="calendar" className="h-4 w-4 text-brand-red" />
                  Pelepasan Berkumpulan 2026
                </div>
              </div>

              <Button
                href="#tarikh-pelepasan"
                variant="accent"
                className="w-full px-6 py-3.5 text-sm sm:w-auto"
              >
                Semak Seat & Tarikh 2026
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="animate-fade-up lg:pl-2">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <Image
                  src="/images/makassar-gallery-1.jpg"
                  alt="Peserta Nusatravel di Makassar — Trip Berkumpulan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                {/* Bottom gradient for caption readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-bold text-white drop-shadow">
                    Peserta Nusatravel Trip Makassar
                  </p>
                  <p className="text-2xs text-white/85">
                    Trip berkumpulan — itinerary tersusun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature cards */}
        <div className="mt-12 hidden lg:block">
          <div className="grid grid-cols-4 gap-3 rounded-xl border border-gray-200 bg-white p-2 shadow-soft">
            {[
              { icon: "plane", title: "Flight", desc: "Return Ticket" },
              { icon: "building", title: "Hotel", desc: "3-4 Star" },
              { icon: "utensils", title: "Halal Meals", desc: "Breakfast & Dinner" },
              { icon: "users", title: "Guide", desc: "Experienced" },
            ].map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-start gap-1.5 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Icon name={f.icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-charcoal">{f.title}</p>
                  <p className="text-2xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
