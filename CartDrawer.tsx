"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function CartDrawer() {
  const { lines, isDrawerOpen, closeDrawer, updateQuantity, totalPrice } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-bone transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="flex items-center justify-between border-b border-stone/70 px-6 py-5">
          <p className="font-display text-lg font-bold">Sepetim</p>
          <button onClick={closeDrawer} aria-label="Kapat" className="text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 && (
            <p className="pt-10 text-center text-sm text-graphite">
              Sepetiniz şu anda boş.
            </p>
          )}

          <ul className="space-y-6">
            {lines.map((line) => {
              const product = getProductBySlug(line.slug);
              if (!product) return null;
              return (
                <li key={`${line.slug}-${line.size}`} className="flex gap-4">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone/40">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/urun/${product.slug}`}
                        onClick={closeDrawer}
                        className="text-sm font-medium hover:underline"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-graphite">Beden: {line.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone">
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity - 1)
                          }
                          aria-label="Azalt"
                        >
                          −
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm">
                          {line.quantity}
                        </span>
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity + 1)
                          }
                          aria-label="Artır"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(product.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {lines.length > 0 && (
          <div className="border-t border-stone/70 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-graphite">Ara Toplam</span>
              <span className="font-medium">{formatPrice(totalPrice)}</span>
            </div>
            <Link
              href="/sepet"
              onClick={closeDrawer}
              className="block w-full bg-ink py-3.5 text-center text-sm font-medium text-bone transition-colors hover:bg-graphite"
            >
              Sepete Git
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
