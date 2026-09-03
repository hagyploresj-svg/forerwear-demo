"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product, Size } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setFavorite] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [addedSize, setAddedSize] = useState<Size | null>(null);
  const { addLine } = useCart();

  function handleQuickAdd(size: Size) {
    if (product.soldOutSizes?.includes(size)) return;

    addLine(product.slug, size, 1);
    setAddedSize(size);

    window.setTimeout(() => {
      setAddedSize(null);
    }, 1400);
  }

  return (
    <>
      <article className="group relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f3f1]">
          <Link
            href={`/urun/${product.slug}`}
            className="relative block h-full w-full"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
            />

            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={`${product.name} alternatif görünüm`}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
              />
            )}
          </Link>

          {product.isNew && (
            <span className="absolute left-3 top-3 bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
              Yeni
            </span>
          )}

          <button
            type="button"
            onClick={() => setFavorite((value) => !value)}
            aria-label={
              isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"
            }
            aria-pressed={isFavorite}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-black shadow-sm transition duration-200 hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px]"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 20.5s-7.5-4.6-9.7-9.2C1 8.1 2.2 4.9 5.3 4.1c2-.5 4 .3 5.2 2 .3.4.9.4 1.2 0 1.2-1.7 3.2-2.5 5.2-2 3.1.8 4.3 4 3 7.2C19.5 15.9 12 20.5 12 20.5Z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setQuickViewOpen(true)}
            className="absolute inset-x-3 bottom-3 hidden translate-y-3 bg-black py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block"
          >
            Hızlı İncele
          </button>
        </div>

        <div className="pt-4">
          <div className="flex items-start justify-between gap-4">
            <Link href={`/urun/${product.slug}`} className="min-w-0">
              <h3 className="text-[15px] font-medium leading-snug text-black transition-opacity hover:opacity-60">
                {product.name}
              </h3>
            </Link>

            <p className="shrink-0 text-[15px] font-semibold text-black">
              {formatPrice(product.price)}
            </p>
          </div>

          <p className="mt-1 text-xs text-black/45">
            Bedenini seç, hızlıca sepete ekle
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.sizes.map((size) => {
              const soldOut = product.soldOutSizes?.includes(size);
              const justAdded = addedSize === size;

              return (
                <button
                  type="button"
                  key={size}
                  disabled={soldOut}
                  onClick={() => handleQuickAdd(size)}
                  title={
                    soldOut
                      ? `${size} beden tükendi`
                      : `${size} beden sepete ekle`
                  }
                  className={`flex h-8 min-w-8 items-center justify-center border px-2 text-[11px] font-medium transition-all duration-200 ${
                    soldOut
                      ? "cursor-not-allowed border-black/10 text-black/25 line-through"
                      : justAdded
                      ? "border-black bg-black text-white"
                      : "border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {justAdded ? "✓" : size}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setQuickViewOpen(true)}
            className="mt-3 w-full border border-black/15 py-2.5 text-xs font-medium text-black transition hover:border-black hover:bg-black hover:text-white md:hidden"
          >
            Ürünü İncele
          </button>
        </div>
      </article>

      {quickViewOpen && (
        <QuickViewModal
          product={product}
          onClose={() => setQuickViewOpen(false)}
        />
      )}
    </>
  );
}
