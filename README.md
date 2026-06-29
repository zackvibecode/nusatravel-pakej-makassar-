# Nusatravel — Pakej Makassar 5 Hari 4 Malam

Sales page premium untuk pakej pelancongan Makassar oleh Nusatravel.

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Font:** Montserrat (via `next/font/google`)

## Quick Start

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur Project

```
src/
├── app/
│   ├── globals.css        # Tailwind + base styles
│   ├── layout.tsx         # Root layout + Montserrat font + metadata
│   └── page.tsx           # Halaman utama (gabungan semua section)
├── components/
│   ├── Header.tsx
│   ├── StickyWhatsApp.tsx # Sticky CTA mobile
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Icon.tsx       # Inline SVG icons
│   └── sections/
│       ├── Hero.tsx
│       ├── WhyChoose.tsx
│       ├── TourHighlights.tsx
│       ├── Itinerary.tsx
│       ├── IncludesExcludes.tsx
│       ├── Gallery.tsx
│       ├── DepartureDates.tsx
│       ├── BookingSteps.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── data/
│   └── content.ts         # SEMUA teks, harga & tarikh di sini
└── public/images/         # Gambar (lihat README di dalam folder ini)
```

## Cara Edit Kandungan

Hampir semua teks, harga, tarikh dan pautan WhatsApp ada dalam satu fail:

```
src/data/content.ts
```

Tukar nombor WhatsApp di `WHATSAPP_URL`. Tukar harga di `SITE.priceFrom`. Tukar tarikh di `NORMAL_DATES` / `PREMIER_DATES`.

## Gantikan Gambar

Letak gambar sebenar di `public/images/`. Nama fail mesti sama seperti dalam `src/data/content.ts`. Lihat `public/images/README.md` untuk saiz cadangan.

## Warna Brand

| Token | Hex | Kegunaan |
|-------|-----|----------|
| `brand-red` | `#E11D2A` | CTA, harga, heading accent |
| `brand-dark` | `#B11120` | Hover state |
| `brand-soft` | `#FF6B6B` | Gradient accent |
| `brand-light` | `#FFF1F2` | Background lembut |
| `brand-charcoal` | `#1F1F23` | Teks utama |

## Build Production

```bash
npm run build
npm start
```
