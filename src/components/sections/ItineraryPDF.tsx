"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { PDF } from "@/data/content";

export default function ItineraryPDF() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="itinerary-pdf" className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Dokumen Penuh"
          title={
            <>
              Lihat Itinerary{" "}
              <span className="text-brand-red">PDF</span>
            </>
          }
          subtitle={PDF.desc}
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="card overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Icon name="file" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-tight text-brand-charcoal">
                    {PDF.title}
                  </p>
                  <p className="text-2xs text-gray-400">PDF Document</p>
                </div>
              </div>
              <a
                href={PDF.src}
                download={PDF.filename}
                className="btn-secondary !px-3 !py-1.5 !text-2xs"
              >
                <Icon name="download" className="h-3.5 w-3.5" />
                Download
              </a>
            </div>

            {/* Viewer */}
            <div className="relative aspect-[3/4] w-full bg-gray-100 sm:aspect-[4/3]">
              {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-brand-red" />
                  <p className="text-xs">Memuatkan PDF…</p>
                </div>
              )}
              <iframe
                src={`${PDF.src}#view=FitH&toolbar=1`}
                title={PDF.title}
                className="h-full w-full"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>

          {/* Mobile fallback note */}
          <p className="mt-3 text-center text-2xs text-gray-400 sm:hidden">
            Jika PDF tak papar,{" "}
            <a href={PDF.src} download={PDF.filename} className="link">
              muat turun di sini
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
