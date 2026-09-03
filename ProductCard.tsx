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
    window.setTimeout(() => setAddedSize(null), 1400);
  }

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone/40">
        <Link href={`/urun/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </Link>

        {product.isNew && (
          <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[11px] font-medium text-bone">
            Yeni
          </span>
        )}

        <button
          onClick={() => setFavorite((v) => !v)}
          aria-label="Favorilere ekle"
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bone/90 transition-transform hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 20.5s-7.5-4.6-9.7-9.2C1 8.1 2.2 4.9 5.3 4.1c2-.5 4 .3 5.2 2 .3.4.9.4 1.2 0 1.2-1.7 3.2-2.5 5.2-2 3.1.8 4.3 4 3 7.2C19.5 15.9 12 20.5 12 20.5Z" />
          </svg>
        </button>

        <button
          onClick={() => setQuickViewOpen(true)}
          className="absolute inset-x-3 bottom-3 hidden translate-y-2 items-center justify-center border border-bone/0 bg-bone/95 py-2.5 text-xs font-medium tracking-wide text-ink opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 md:flex"
        >
          Hızlı İncele
        </button>
      </div>

      <div className="pt-3">
        <Link href={`/urun/${product.slug}`} className="block">
          <h3 className="text-[15px] leading-snug hover:underline">{product.name}</h3>
        </Link>
        <p className="mt-1 text-[15px] font-medium">{formatPrice(product.price)}</p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {product.sizes.map((size) => {
            const soldOut = product.soldOutSizes?.includes(size);
            const justAdded = addedSize === size;
            return (
              <button
                key={size}
                disabled={soldOut}
                onClick={() => handleQuickAdd(size)}
                className={`h-7 min-w-[1.75rem] border px-1.5 text-[11px] transition-colors ${
                  soldOut
                    ? "cursor-not-allowed border-stone text-stone line-through"
                    : justAdded
                    ? "border-ink bg-ink text-bone"
                    : "border-stone text-graphite hover:border-ink hover:text-ink"
                }`}
                title={soldOut ? `${size} beden tükendi` : `${size} beden sepete ekle`}
              >
                {justAdded ? "✓" : size}
              </button>
            );
          })}
        </div>
      </div>

      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </div>
  );
}
