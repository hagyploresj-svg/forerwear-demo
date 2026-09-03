import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/products";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pt-6 md:px-8 md:pt-10">
      <div className="grid overflow-hidden bg-[#111111] md:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-center px-7 py-12 text-white md:px-12 md:py-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            SHNWearMEN · Yeni Sezon
          </p>

          <h1 className="font-display text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
            Yeni Stil.
            <br />
            Yeni Sen.
          </h1>

          <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-white/70 md:text-base">
            Günlük stilinden özel kombinlere kadar yeni sezon erkek
            koleksiyonunu keşfet.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kategori/yeni-gelenler"
              className="bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Koleksiyonu Keşfet
            </Link>

            <Link
              href="/kategori/takim-kombin"
              className="border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Kombinleri İncele
            </Link>
          </div>

          <div className="mt-10 flex gap-6 border-t border-white/15 pt-5 text-xs text-white/55">
            <span>Beden seçenekleri</span>
            <span>WhatsApp destek</span>
            <span>Online sipariş</span>
          </div>
        </div>

        <div className="relative min-h-[520px] w-full bg-stone md:min-h-[620px]">
          <Image
            src={HERO_IMAGE}
            alt="SHNWearMEN erkek giyim koleksiyonu"
            fill
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 bg-white px-4 py-2 text-xs font-medium text-black">
            Yeni Sezon 2026
          </div>
        </div>
      </div>
    </section>
  );
}
