"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { PROMO_VIDEO } from "@/data/content";

function buildEmbedUrl(muted: boolean) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    loop: "1",
    music_info: "0",
    description: "0",
  });
  return `https://www.tiktok.com/player/v1/${PROMO_VIDEO.videoId}?${params.toString()}`;
}

export default function PromoVideo() {
  const [embedSrc, setEmbedSrc] = useState("");
  const [muted, setMuted] = useState(true);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setEmbedSrc(buildEmbedUrl(true));
  }, []);

  const handleUnmute = () => {
    setEmbedSrc(buildEmbedUrl(false));
    setMuted(false);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Video Makassar"
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
            <div className="overflow-hidden rounded-3xl border-4 border-brand-charcoal shadow-2xl">
              <div className="relative aspect-[9/16] w-full bg-black">
                {embedSrc ? (
                  <iframe
                    src={embedSrc}
                    title={PROMO_VIDEO.title}
                    allow="fullscreen; autoplay"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  </div>
                )}

                {embedSrc && muted && (
                  <button
                    type="button"
                    onClick={handleUnmute}
                    className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                    aria-label="Hidupkan bunyi video"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    Hidupkan bunyi
                  </button>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-2xs text-gray-500">
              Video TikTok rasmi Nusatravel — Pakej Makassar 5H4M
            </p>

            <div className="mt-2 flex justify-center">
              <a
                href={PROMO_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-charcoal shadow-sm transition-colors hover:border-brand-red/30 hover:text-brand-red"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                Buka di TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
