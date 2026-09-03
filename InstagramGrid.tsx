import Image from "next/image";
import { PRODUCTS } from "@/lib/products";

export default function InstagramGrid() {
  const images = PRODUCTS.slice(0, 8).map((p) => ({
    src: p.images[0],
    alt: p.name,
  }));

  return (
    <section className="border-t border-stone/70 py-14">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
            @SHNWearMEN
          </h2>
          <a
            href="https://instagram.com/shnwearmen"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-graphite underline underline-offset-2 hover:text-ink"
          >
            Instagram&apos;da takip et
          </a>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden bg-stone/40">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 12vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
