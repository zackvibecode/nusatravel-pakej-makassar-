import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { GALLERY_IMAGES } from "@/data/content";

export default function Gallery() {
  const main = GALLERY_IMAGES.find((g) => g.span === "main");
  const smalls = GALLERY_IMAGES.filter((g) => g.span === "small");

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
          subtitle="Antara pengalaman peserta Nusatravel ketika trip Makassar sebelum ini."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {main && (
            <div className="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 sm:row-span-2 sm:aspect-auto">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          )}

          {smalls.map((g) => (
            <div
              key={g.src}
              className="group relative aspect-square overflow-hidden rounded-xl border border-gray-200"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
