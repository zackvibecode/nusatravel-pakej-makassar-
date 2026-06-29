"use client";

import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { WHATSAPP_URL } from "@/data/content";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-gray-200 bg-white/95 p-2.5 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#1ebe5d]"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Semak Seat Sekarang
        </a>
      </div>
    </div>
  );
}
