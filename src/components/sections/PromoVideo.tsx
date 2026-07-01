"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { PROMO_VIDEO } from "@/data/content";

export default function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${PROMO_VIDEO.youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${PROMO_VIDEO.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Video Promo"
          title={
            <>
              Tengok Sendiri{" "}
              <span className="text-brand-red">Experience Makassar</span>
            </>
          }
          subtitle={PROMO_VIDEO.subtitle}
        />

        <div className="mx-auto mt-10 flex justify-center">
          <div className="w-full max-w-[320px]">
            {/* Phone frame */}
            <div className="overflow-hidden rounded-3xl border-4 border-brand-charcoal shadow-2xl">
              <div className="relative aspect-[9/16] w-full bg-black">
                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center gap-4 transition-opacity hover:opacity-90"
                    aria-label="Play video"
                  >
                    {/* Thumbnail */}
                    <img
                      src={thumbnailUrl}
                      alt={PROMO_VIDEO.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Play button */}
                    <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red shadow-lg transition-transform hover:scale-105">
                      <svg
                        className="ml-1 h-7 w-7 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Label */}
                    <p className="relative z-20 text-xs font-semibold text-white drop-shadow-lg">
                      Tonton Video Promo
                    </p>
                  </button>
                ) : (
                  <iframe
                    src={embedUrl}
                    title={PROMO_VIDEO.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                )}
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-2xs text-gray-500">
              Video promo rasmi Nusatravel Pakej Makassar 5H4M
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
