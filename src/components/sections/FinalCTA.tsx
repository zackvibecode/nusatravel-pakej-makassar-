import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { WHATSAPP_URL } from "@/data/content";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-xl border border-brand-red/20 bg-red-gradient px-6 py-12 text-center sm:px-12 sm:py-14">
          {/* decorative grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow mb-3 text-white/80">Tindakan Pantas</span>
            <h2 className="text-2xl font-bold leading-tight tracking-tightest text-white sm:text-3xl lg:text-4xl">
              Nak Semak Seat Untuk Pakej Makassar 2026?
            </h2>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Klik WhatsApp dan team Nusatravel akan bantu semak tarikh, harga
              promo dan full itinerary untuk anda. Antara highlight utama pakej
              ini termasuk FREE pelayaran Kapal Phinisi Ghinayah dengan sunset,
              makan malam dan minum petang di atas kapal.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                href={WHATSAPP_URL}
                variant="whatsapp"
                external
                className="px-6 py-3 text-sm animate-pulse-soft"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Semak Seat Makassar 2026
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
