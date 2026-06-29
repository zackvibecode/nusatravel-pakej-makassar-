"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { FAQ, WHATSAPP_URL } from "@/data/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="FAQ"
          title={
            <>
              Soalan Lazim{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-brand-red">Jawapan</span>
            </>
          }
          subtitle="Soalan yang selalu ditanya oleh peserta Nusatravel sebelum tempah."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`card overflow-hidden transition-colors ${
                  isOpen ? "border-gray-300" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold tracking-tight text-brand-charcoal sm:text-[15px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 ${
                      isOpen ? "rotate-45 bg-brand-red text-white" : ""
                    }`}
                  >
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm text-gray-500">
            Masih ada soalan?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-semibold"
            >
              WhatsApp team Nusatravel
            </a>{" "}
            untuk jawapan lanjut.
          </p>
        </div>
      </div>
    </section>
  );
}
