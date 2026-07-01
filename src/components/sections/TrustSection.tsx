import Icon from "../ui/Icon";

const TRUST_ITEMS = [
  {
    title: "Itinerary Tersusun",
    desc: "Aturcara dirancang rapi dari hari pertama hingga pulang.",
    icon: "calendar",
  },
  {
    title: "Makanan Halal",
    desc: "Makanan halal mengikut aturcara sepanjang perjalanan.",
    icon: "utensils",
  },
  {
    title: "Sesuai Untuk Semua",
    desc: "Mesra family, warga emas dan first timer.",
    icon: "users",
  },
  {
    title: "Semua Diuruskan",
    desc: "Flight, hotel, transport dan lawatan semua diuruskan.",
    icon: "plane",
  },
];

export default function TrustSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-3">Kenapa Pilih Nusatravel</span>
          <h2 className="text-xl font-bold tracking-tightest text-brand-charcoal sm:text-2xl">
            Travel Tanpa Pening, Semua Kami Uruskan
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Kami pastikan setiap detail perjalanan anda diambil kira.
          </p>
        </div>

        {/* MOTAC & company info */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-gray-200 bg-brand-light/60 px-5 py-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                <Icon name="shield" className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Berdaftar MOTAC
                </p>
                <p className="text-sm font-semibold text-brand-charcoal">
                  Agensi Pelancongan Berlesen
                </p>
              </div>
            </div>
            <div className="space-y-3 px-5 py-5 text-left text-sm leading-relaxed text-gray-600">
              <p className="font-bold text-brand-charcoal">NUSATRAVEL SDN BHD</p>
              <p>
                3-42 Wisma Kwan Siew Choo,
                <br />
                Jalan Besar Bandar Kajang, 43000 Selangor
              </p>
              <p className="inline-flex rounded-md border border-brand-red/20 bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand-dark">
                No Lesen MOTAC – 8693
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-gray-300"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white text-brand-charcoal">
                <Icon name={item.icon} className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight text-brand-charcoal">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
