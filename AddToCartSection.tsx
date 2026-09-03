"use client";

import { useState } from "react";
import { Product, Size } from "@/lib/types";
import { useCart } from "./CartProvider";
import SizeGuideModal from "./SizeGuideModal";

export default function AddToCartSection({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const { addLine } = useCart();

  function handleAdd() {
    if (!selectedSize) {
      setError(true);
      return;
    }
    addLine(product.slug, selectedSize, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-graphite">Beden seçin</p>
        <button
          onClick={() => setSizeGuideOpen(true)}
          className="text-sm text-graphite underline underline-offset-2 hover:text-ink"
        >
          Bedenimi nasıl seçerim?
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
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
              className={`h-11 min-w-[3rem] border px-3 text-sm transition-colors ${
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
        <p className="mt-2 text-xs text-rust">Sepete eklemek için lütfen bir beden seçin.</p>
      )}

      <button
        onClick={handleAdd}
        className="mt-6 w-full bg-ink py-4 text-sm font-medium text-bone transition-colors hover:bg-graphite"
      >
        {added ? "Sepete Eklendi ✓" : "Sepete Ekle"}
      </button>

      {sizeGuideOpen && <SizeGuideModal onClose={() => setSizeGuideOpen(false)} />}
    </div>
  );
}
