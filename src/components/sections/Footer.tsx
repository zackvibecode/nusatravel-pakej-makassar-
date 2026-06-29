import Icon from "../ui/Icon";
import { SITE, WHATSAPP_URL } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-x py-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-charcoal text-white">
                <Icon name="compass" className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm font-bold tracking-tight text-brand-charcoal">
                {SITE.brand}
              </p>
            </div>
            <p className="mt-1 text-xs text-gray-400">{SITE.tagline}</p>
          </div>

          <a
            href={`https://${SITE.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-gray-500 transition-colors hover:text-brand-red"
          >
            {SITE.website}
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-2xs font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            WhatsApp Kami
          </a>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-5 text-center text-2xs text-gray-400">
          © {new Date().getFullYear()} {SITE.brand}. Hak cipta terpelihara.
        </div>
      </div>
    </footer>
  );
}
