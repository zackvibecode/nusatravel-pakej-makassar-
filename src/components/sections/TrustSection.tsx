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
    title: "Bantuan Team",
    desc: "Bantuan team sebelum dan semasa perjalanan.",
    icon: "compass",
  },
  {
    title: "Harga Jelas",
    desc: "Harga jelas dan mudah difahami, tiada caj tersembunyi.",
    icon: "file",
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

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
