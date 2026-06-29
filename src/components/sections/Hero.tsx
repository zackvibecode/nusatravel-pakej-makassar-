import Image from "next/image";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { WHATSAPP_URL, SITE } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-x relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="badge border-brand-red/20 bg-brand-light text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Pelepasan Berkumpulan 2026
            </span>
            <span className="badge">{SITE.packageName}</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tightest text-brand-charcoal sm:text-5xl lg:text-[3.5rem]">
            Jelajah Sulawesi{" "}
            <span className="text-gradient-red">Bersama Nusatravel</span>
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-gray-500 sm:text-base lg:max-w-lg">
            Nikmati percutian santai ke Makassar dengan itinerary tersusun,
            lawatan menarik, makanan mengikut aturcara dan pengalaman sunset di
            Phinisi Ghinayah.
          </p>

          {/* Price */}
          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="text-2xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Dari
            </span>
            <span className="text-3xl font-bold tracking-tightest text-brand-red sm:text-4xl">
              {SITE.priceFrom}
            </span>
            <span className="text-sm text-gray-400 line-through">
              RM2,980
            </span>
            <span className="badge border-green-200 bg-green-50 text-green-600">
              Promo
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Button href={WHATSAPP_URL} variant="accent" external>
              <Icon name="whatsapp" className="h-4 w-4" />
              Semak Seat Sekarang
            </Button>
            <Button href="#tarikh-pelepasan" variant="secondary">
              Lihat Tarikh Pelepasan
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-2xs text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="shield" className="h-3.5 w-3.5 text-gray-400" />
              Termasuk Penerbangan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="users" className="h-3.5 w-3.5 text-gray-400" />
              Mesra Keluarga
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" className="h-3.5 w-3.5 text-gray-400" />
              5 Hari 4 Malam
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-gray-200 sm:aspect-[5/5]">
            <Image
              src="/images/makassar-hero.jpg"
              alt="Pengalaman trip Makassar bersama Nusatravel"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* floating card */}
          <div className="absolute -bottom-4 -left-3 hidden rounded-lg border border-gray-200 bg-white/95 p-3 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-charcoal text-white">
                <Icon name="map-pin" className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-tight text-brand-charcoal">
                  Makassar, Sulawesi
                </p>
                <p className="text-2xs text-gray-400">
                  5 Hari 4 Malam • All-inclusive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
