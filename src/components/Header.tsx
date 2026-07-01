import Icon from "./ui/Icon";
import Logo from "./Logo";
import { WHATSAPP_URL } from "@/data/content";

const NAV_LINKS = [
  { href: "#tempat-lawatan", label: "Lawatan" },
  { href: "#itinerary", label: "Itinerary" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tarikh-pelepasan", label: "Tarikh" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo size={40} priority />
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
          className="btn-whatsapp !px-3.5 !py-1.5 !text-2xs"
        >
          <Icon name="whatsapp" className="h-3.5 w-3.5" />
          Semak Seat
        </a>
      </div>
    </header>
  );
}
