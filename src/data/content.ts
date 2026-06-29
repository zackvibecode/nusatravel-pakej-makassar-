// Centralized content/data for the Makassar sales page.
// Edit values here to update the page without touching components.

export const WHATSAPP_URL =
  "https://wa.me/60123456789?text=Saya%20berminat%20Pakej%20Makassar";

export const SITE = {
  brand: "Nusatravel",
  tagline: "That was easy.",
  website: "www.nusatra.com",
  packageName: "Pakej Makassar 5 Hari 4 Malam",
  priceFrom: "RM2,680",
};

export type DateRow = {
  depart: string;
  return: string;
  originalPrice: string;
  promoPrice: string;
  season: string;
};

export const NORMAL_DATES: DateRow[] = [
  { depart: "01 Aug 2026", return: "05 Aug 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Normal Date" },
  { depart: "15 Aug 2026", return: "19 Aug 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Normal Date" },
  { depart: "15 Sep 2026", return: "19 Sep 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Hari Malaysia" },
  { depart: "03 Oct 2026", return: "07 Oct 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Normal Date" },
  { depart: "15 Oct 2026", return: "19 Oct 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Normal Date" },
  { depart: "24 Oct 2026", return: "28 Oct 2026", originalPrice: "RM2,980", promoPrice: "RM2,780", season: "Normal Date" },
  { depart: "05 Nov 2026", return: "09 Nov 2026", originalPrice: "RM2,980", promoPrice: "RM2,780", season: "Deepavali" },
  { depart: "12 Nov 2026", return: "16 Nov 2026", originalPrice: "RM2,980", promoPrice: "RM2,780", season: "Normal Date" },
  { depart: "21 Nov 2026", return: "25 Nov 2026", originalPrice: "RM2,980", promoPrice: "RM2,680", season: "Normal Date" },
];

export const PREMIER_DATES: DateRow[] = [
  { depart: "29 Aug 2026", return: "02 Sep 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "01 Dec 2026", return: "05 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "05 Dec 2026", return: "09 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "12 Dec 2026", return: "16 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "17 Dec 2026", return: "21 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "24 Dec 2026", return: "28 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
  { depart: "26 Dec 2026", return: "30 Dec 2026", originalPrice: "RM3,080", promoPrice: "RM2,780", season: "Cuti Sekolah" },
];

export const WHY_CHOOSE = [
  {
    title: "Itinerary Tersusun",
    desc: "Aturcara dirancang rapi dari hari pertama hingga pulang. Tak perlu risau tentang logistik.",
    icon: "calendar",
  },
  {
    title: "Sesuai Untuk Family & First Timer",
    desc: "Pace santai, mesra keluarga dan sesuai untuk yang pertama kali ke Makassar.",
    icon: "users",
  },
  {
    title: "Lawatan Alam, Religi & Shopping",
    desc: "Gabungan lawatan alam, tempat religi dan shopping dalam satu pakej.",
    icon: "compass",
  },
  {
    title: "Sunset di Phinisi Ghinayah",
    desc: "Pengalaman sunset dinner di atas kapal Phinisi — eksklusif & menarik.",
    icon: "anchor",
  },
];

export const HIGHLIGHTS = [
  { title: "Makassar City Tour", icon: "city" },
  { title: "Rammang-Rammang", icon: "mountain" },
  { title: "Bukit Ammarung", icon: "hill" },
  { title: "Somba Opu", icon: "shop" },
  { title: "Malino Highland", icon: "trees" },
  { title: "Ladang Teh", icon: "leaf" },
  { title: "Hutan Pinus", icon: "pine" },
  { title: "Lawatan Religi", icon: "mosque" },
  { title: "Phinisi Ghinayah Sunset", icon: "sunset" },
  { title: "Pantai Losari", icon: "beach" },
  { title: "Fort Rotterdam", icon: "fort" },
  { title: "Masjid Al-Markaz Al-Islami", icon: "dome" },
];

export const ITINERARY = [
  {
    day: "Hari 1",
    title: "KLIA2 – Makassar City Tour",
    desc: "Ketibaan di Makassar, makan tengah hari, lawatan ke Fort Rotterdam, Museum LaGaligo, Masjid Kubah 99 dan check-in hotel.",
  },
  {
    day: "Hari 2",
    title: "Rammang-Rammang – Bukit Ammarung – Somba Opu",
    desc: "Lawatan ke Rammang-Rammang, menaiki perahu menyusuri Sungai Pute, bergambar di Pantai Losari dan membeli-belah di Somba Opu.",
  },
  {
    day: "Hari 3",
    title: "Malino Highland – Ladang Teh – Hutan Pinus",
    desc: "Melawat ladang teh, taman bunga, Hutan Pinus dan menikmati suasana nyaman di kawasan Malino.",
  },
  {
    day: "Hari 4",
    title: "Lawatan Religi – Shopping – Phinisi Ghinayah",
    desc: "Lawatan ke Masjid Al-Markaz Al-Islami, Balla Lompoa, shopping di Pasar Baru dan pengalaman sunset dinner di atas kapal Phinisi.",
  },
  {
    day: "Hari 5",
    title: "Makassar – Kuala Lumpur",
    desc: "Check-out hotel, membeli-belah di Mall Pannakukang, makan tengah hari dan penerbangan pulang ke Kuala Lumpur.",
  },
];

export const INCLUDES = [
  "Tiket penerbangan pergi balik",
  "Makan minum mengikut aturcara",
  "Pengangkutan sepanjang program",
  "4 malam penginapan",
  "Pemandu pelancong",
  "Air mineral",
  "Bagasi 20KG",
];

export const EXCLUDES = [
  "Insurans peribadi",
  "Optional tour",
  "Tipping RM80 seorang",
  "Perbelanjaan peribadi",
];

export const BOOKING_STEPS = [
  "Pilih tarikh pelepasan anda",
  "Hantar salinan IC / passport",
  "Dapatkan pengesahan daripada pihak Nusatravel",
  "Bayar deposit RM1,000 seorang",
  "Baki bayaran 45 hari sebelum berlepas",
];

export const GALLERY_IMAGES = [
  { src: "/images/makassar-gallery-1.jpg", alt: "Peserta Nusatravel di Makassar 1", span: "main" },
  { src: "/images/makassar-gallery-2.jpg", alt: "Peserta Nusatravel di Makassar 2", span: "small" },
  { src: "/images/makassar-gallery-3.jpg", alt: "Peserta Nusatravel di Makassar 3", span: "small" },
  { src: "/images/makassar-gallery-4.jpg", alt: "Peserta Nusatravel di Makassar 4", span: "small" },
  { src: "/images/makassar-gallery-5.jpg", alt: "Peserta Nusatravel di Makassar 5", span: "small" },
];

// PDF itinerary — letak PDF anda di /public/itinerary.pdf
// (atau tukar path di bawah jika nama lain)
export const PDF = {
  src: "/itinerary.pdf",
  title: "Itinerary Penuh Pakej Makassar",
  desc: "Lihat ringkasan lengkap aturcara 5 hari 4 malam dalam format PDF.",
  filename: "Itinerary-Makassar-Nusatravel.pdf",
};

export const FAQ = [
  {
    q: "Berapa harga pakej Makassar ini?",
    a: "Harga promo bermula dari RM2,680 seorang untuk Normal Date. Bagi tarikh Cuti Sekolah / Premier, harga promo ialah RM2,780 seorang. Harga asal ialah RM2,980–RM3,080.",
  },
  {
    q: "Apa yang termasuk dalam harga pakej?",
    a: "Harga termasuk tiket penerbangan pergi balik, makan minum mengikut aturcara, pengangkutan sepanjang program, 4 malam penginapan, pemandu pelancong, air mineral dan bagasi 20KG.",
  },
  {
    q: "Apa yang tidak termasuk dalam harga?",
    a: "Tidak termasuk insurans peribadi, optional tour, tipping RM80 seorang dan perbelanjaan peribadi.",
  },
  {
    q: "Macam mana cara saya tempah?",
    a: "Mudah — pilih tarikh pelepasan, hantar salinan IC/passport, dapatkan pengesahan dari Nusatravel, bayar deposit RM1,000 seorang, dan baki bayaran 45 hari sebelum berlepas.",
  },
  {
    q: "Berapa deposit yang perlu dibayar?",
    a: "Deposit ialah RM1,000 seorang untuk sahkan seat. Baki bayaran perlu diselesaikan 45 hari sebelum tarikh berlepas.",
  },
  {
    q: "Pakej ini sesuai untuk siapa?",
    a: "Pakej ini sesuai untuk keluarga, couple dan first-timer yang belum pernah ke Makassar. Pace santai dan itinerary tersusun rapi.",
  },
  {
    q: "Apakah tempat yang akan dilawati?",
    a: "Antaranya Fort Rotterdam, Rammang-Rammang, Bukit Ammarung, Malino Highland, Ladang Teh, Hutan Pinus, Masjid Al-Markaz Al-Islami dan pengalaman sunset di kapal Phinisi Ghinayah.",
  },
  {
    q: "Bagaimana saya semak kekosongan seat?",
    a: "Klik butang WhatsApp di page ini untuk hubungi team Nusatravel terus. Kami akan semak tarikh terkini dan kekosongan seat untuk anda.",
  },
];
