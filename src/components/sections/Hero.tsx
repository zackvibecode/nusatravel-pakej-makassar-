import Image from "next/image";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { WHATSAPP_URL, SITE } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      {/* Background image — full bleed */}
      <div className="absolute inset-0">
        <Image
          src="/images/makassar-hero.jpg"
          alt="Pakej Makassar 5 Hari 4 Malam Nusatravel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-x relative flex min-h-[92vh] flex-col justify-center py-14 sm:py-16 lg:min-h-[88vh] lg:py-20">
        <div className="max-w-xl animate-fade-up">
          {/* Badges */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="badge border-white/20 bg-white/10 text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Pelepasan Berkumpulan 2026
            </span>
            <span className="badge border-white/15 bg-white/5 text-white/80 backdrop-blur">
              {SITE.packageName}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold leading-[1.02] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            PAKEJ <span className="block">MAKASSAR</span>
            <span className="text-gradient-red">2026</span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Travel Dengan Lebih Mudah
          </p>

          {/* Price block */}
          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="text-2xs font-semibold uppercase tracking-[0.2em] text-white/60">
              From
            </span>
            <span className="text-4xl font-bold tracking-tightest text-white sm:text-5xl">
              {SITE.priceFrom}
            </span>
            <span className="text-sm text-white/40 line-through">
              RM2,980
            </span>
          </div>

          {/* Date row */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur">
            <Icon name="calendar" className="h-4 w-4" />
            29 Jan - 02 Feb 2026
            <span className="text-white/40">•</span>
            5 Hari 4 Malam
          </div>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75">
            Sesuai untuk family, first timer dan peserta yang mahukan trip
            berkumpulan yang tersusun.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Button
              href={WHATSAPP_URL}
              variant="accent"
              external
              className="px-5 py-3 text-sm"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp Now
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Button>
            <Button
              href="#tarikh-pelepasan"
              variant="secondary"
              className="border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <Icon name="calendar" className="h-4 w-4" />
              Full Itinerary
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom feature cards */}
      <div className="container-x relative z-10 hidden pb-10 sm:pb-14 lg:block">
        <div className="grid max-w-4xl grid-cols-4 gap-3 rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md">
          {[
            { icon: "plane", title: "Flight", desc: "Return Ticket" },
            { icon: "building", title: "Hotel", desc: "3-4 Star" },
            { icon: "utensils", title: "Halal Meals", desc: "Breakfast & Dinner" },
            { icon: "users", title: "Guide", desc: "Experienced" },
          ].map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-start gap-1.5 rounded-lg px-4 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-brand-red">
                <Icon name={f.icon} className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">{f.title}</p>
                <p className="text-2xs text-white/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
