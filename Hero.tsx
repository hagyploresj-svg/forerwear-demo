import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/products";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pt-8 md:px-8 md:pt-12">
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:gap-10">
        <div className="flex flex-col justify-center py-6 md:py-0">
          <p className="text-sm text-graphite">Yeni Sezon · 2026</p>
          <h1 className="mt-4 font-display text-[13vw] font-black leading-[0.92] tracking-tightest md:text-[5.2vw]">
            Tarzını
            <br />
            Tamamla.
          </h1>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-graphite">
            Yeni sezon erkek koleksiyonu; t-shirt&apos;ten takım elbiseye,
            günün her anına uygun sade ve güçlü parçalarla mağazamızda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kategori/tshirt"
              className="bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
            >
              Yeni Sezonu Keşfet
            </Link>
            <Link
              href="/kategori/takim-kombin"
              className="border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
            >
              Kombinleri İncele
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone md:aspect-auto">
          <Image
            src={HERO_IMAGE}
            alt="SHNWearMEN yeni sezon erkek koleksiyonu"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
