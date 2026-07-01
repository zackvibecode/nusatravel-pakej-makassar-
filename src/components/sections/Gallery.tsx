"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { GALLERY_IMAGES } from "@/data/content";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i + 1) % GALLERY_IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, goPrev, goNext]);

  const active = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section id="galeri" className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Galeri"
          title={
            <>
              Suasana Peserta Nusatravel{" "}
              <span className="text-brand-red">Di Makassar</span>
            </>
          }
          subtitle="Antara pengalaman peserta Nusatravel ketika trip Makassar sebelum ini. Klik gambar untuk lihat saiz penuh."
        />

        <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:columns-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-gray-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
              aria-label={`Lihat gambar: ${img.alt}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  priority={i < 3}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 shadow transition-opacity group-hover:opacity-100">
                    Lihat gambar
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pratonton gambar galeri"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            aria-label="Tutup"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 sm:left-4"
            aria-label="Gambar sebelumnya"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 sm:right-4"
            aria-label="Gambar seterusnya"
          >
            ›
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[80vh] w-auto object-contain"
              sizes="100vw"
              priority
            />
            <p className="mt-3 text-center text-sm text-white/80">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </p>
            <p className="mt-1 max-w-lg text-center text-xs text-white/60">
              {active.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
