"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product, Size } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState(false);
  const { addLine } = useCart();

  function handleAdd() {
    if (!selectedSize) {
      setError(true);
      return;
    }
    addLine(product.slug, selectedSize, 1);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="relative z-10 grid w-full max-w-2xl grid-cols-1 gap-0 bg-bone sm:grid-cols-2">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bone text-lg"
        >
          ×
        </button>
        <div className="relative aspect-[4/5]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          {product.isNew && (
            <span className="mb-3 w-fit bg-ink px-2.5 py-1 text-[11px] font-medium text-bone">
              Yeni
            </span>
          )}
          <h3 className="font-display text-xl font-bold leading-snug">{product.name}</h3>
          <p className="mt-1 text-sm text-graphite">{product.colorName}</p>
          <p className="mt-3 text-lg font-medium">{formatPrice(product.price)}</p>

          <div className="mt-5">
            <p className="mb-2 text-sm text-graphite">Beden seçin</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => {
                const soldOut = product.soldOutSizes?.includes(size);
                return (
                  <button
                    key={size}
                    disabled={soldOut}
                    onClick={() => {
                      setSelectedSize(size);
                      setError(false);
                    }}
                    className={`h-9 min-w-[2.25rem] border px-2 text-sm transition-colors ${
                      soldOut
                        ? "cursor-not-allowed border-stone text-stone line-through"
                        : selectedSize === size
                        ? "border-ink bg-ink text-bone"
                        : "border-stone hover:border-ink"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            {error && (
              <p className="mt-2 text-xs text-rust">Lütfen önce bir beden seçin.</p>
            )}
          </div>

          <button
            onClick={handleAdd}
            className="mt-6 w-full bg-ink py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
          >
            Sepete Ekle
          </button>
          <Link
            href={`/urun/${product.slug}`}
            onClick={onClose}
            className="mt-3 text-center text-sm text-graphite underline underline-offset-2"
          >
            Tüm ürün detaylarını gör
          </Link>
        </div>
      </div>
    </div>
  );
}
