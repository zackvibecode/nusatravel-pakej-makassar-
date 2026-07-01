"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { PROMO_VIDEO } from "@/data/content";

function buildEmbedUrl(muted: boolean) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
  });
  return `https://www.youtube.com/embed/${PROMO_VIDEO.youtubeId}?${params.toString()}`;
}

export default function PromoVideo() {
  const [embedSrc, setEmbedSrc] = useState("");
  const [muted, setMuted] = useState(true);
  const startedRef = useRef(false);

  const watchUrl = `https://www.youtube.com/watch?v=${PROMO_VIDEO.youtubeId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${PROMO_VIDEO.youtubeId}/hqdefault.jpg`;

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setEmbedSrc(buildEmbedUrl(true));
  }, []);

  const handleUnmute = () => {
    setEmbedSrc(buildEmbedUrl(false));
    setMuted(false);
  };

  const handleReplay = () => {
    setEmbedSrc(buildEmbedUrl(muted));
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <>
                    <img
                      src={thumbnailUrl}
                      alt={PROMO_VIDEO.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    </div>
                  </>
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
              Video promo rasmi Nusatravel Pakej Makassar 5H4M
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-charcoal shadow-sm transition-colors hover:border-brand-red/30 hover:text-brand-red"
              >
                <svg
                  className="h-3.5 w-3.5 text-brand-red"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
                Buka di YouTube
              </a>
              {embedSrc && (
                <button
                  type="button"
                  onClick={handleReplay}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm transition-colors hover:border-gray-300"
                >
                  Muat semula video
                </button>
              )}
            </div>

            <p className="mt-3 text-center text-2xs text-gray-400">
              Jika embed tak main di localhost, cuba &quot;Buka di YouTube&quot; atau
              deploy ke domain live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
