import Icon from "./ui/Icon";
import { WHATSAPP_URL, SITE } from "@/data/content";

const NAV_LINKS = [
  { href: "#tempat-lawatan", label: "Lawatan" },
  { href: "#itinerary", label: "Itinerary" },
  { href: "#itinerary-pdf", label: "PDF" },
  { href: "#tarikh-pelepasan", label: "Tarikh" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-charcoal text-white">
            <Icon name="compass" className="h-4 w-4" />
          </span>
          <span className="text-sm font-bold tracking-tight text-brand-charcoal">
            {SITE.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-gray-500 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-brand-charcoal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent !px-3.5 !py-1.5 !text-2xs"
        >
          <Icon name="whatsapp" className="h-3.5 w-3.5" />
          Semak Seat
        </a>
      </div>
    </header>
  );
}
