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

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-black">Beden seçimi</p>
          <p className="mt-1 text-xs text-black/45">
            Sipariş vermek için bedeninizi seçin
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSizeGuideOpen(true)}
          className="shrink-0 text-xs font-medium text-black/60 underline underline-offset-4 transition hover:text-black"
        >
          Beden rehberi
        </button>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2">
        {product.sizes.map((size) => {
          const soldOut = product.soldOutSizes?.includes(size);
          const selected = selectedSize === size;

          return (
            <button
              type="button"
              key={size}
              disabled={soldOut}
              onClick={() => {
                setSelectedSize(size);
                setError(false);
              }}
              className={`h-12 border text-sm font-semibold transition-all duration-200 ${
                soldOut
                  ? "cursor-not-allowed border-black/10 bg-black/[0.02] text-black/20 line-through"
                  : selected
                  ? "border-black bg-black text-white"
                  : "border-black/20 bg-white text-black hover:border-black"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>

      {selectedSize && (
        <p className="mt-3 text-xs text-black/55">
          Seçilen beden:{" "}
          <span className="font-semibold text-black">{selectedSize}</span>
        </p>
      )}

      {error && (
        <p className="mt-3 text-xs font-medium text-red-600">
          Sepete eklemek için lütfen bir beden seçin.
        </p>
      )}

      <button
        type="button"
        onClick={handleAdd}
        className={`mt-6 flex w-full items-center justify-center py-4 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
          added
            ? "bg-green-700 text-white"
            : "bg-black text-white hover:bg-black/80"
        }`}
      >
        {added ? "Sepete Eklendi ✓" : "Sepete Ekle"}
      </button>

      <p className="mt-3 text-center text-[11px] text-black/40">
        Beden ve ürün detayları için WhatsApp üzerinden destek alabilirsiniz.
      </p>

      {sizeGuideOpen && (
        <SizeGuideModal onClose={() => setSizeGuideOpen(false)} />
      )}
    </div>
  );
}
