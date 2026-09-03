"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { lines, updateQuantity, removeLine, totalPrice } = useCart();

  return (
    <section className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-14">
      <h1 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
        Sepetim
      </h1>

      {lines.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-graphite">Sepetinizde ürün bulunmuyor.</p>
          <Link
            href="/"
            className="mt-5 inline-block bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
          >
            Alışverişe Başla
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
          <ul className="divide-y divide-stone/60">
            {lines.map((line) => {
              const product = getProductBySlug(line.slug);
              if (!product) return null;
              return (
                <li key={`${line.slug}-${line.size}`} className="flex gap-5 py-6">
                  <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-stone/40 md:h-40 md:w-32">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/urun/${product.slug}`}
                          className="text-[15px] font-medium hover:underline"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 text-sm text-graphite">
                          Beden: {line.size} · {product.colorName}
                        </p>
                        <p className="mt-1 text-sm text-graphite">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeLine(line.slug, line.size)}
                        className="text-sm text-graphite underline underline-offset-2 hover:text-ink"
                      >
                        Kaldır
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone">
                        <button
                          className="px-3 py-1.5 text-sm"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity - 1)
                          }
                          aria-label="Azalt"
                        >
                          −
                        </button>
                        <span className="min-w-[2rem] text-center text-sm">
                          {line.quantity}
                        </span>
                        <button
                          className="px-3 py-1.5 text-sm"
                          onClick={() =>
                            updateQuantity(line.slug, line.size, line.quantity + 1)
                          }
                          aria-label="Artır"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[15px] font-medium">
                        {formatPrice(product.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="h-fit border border-stone/70 p-6">
            <p className="font-display text-lg font-bold">Sipariş Özeti</p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-graphite">Ara Toplam</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-graphite">Kargo</span>
                <span className="font-medium">Ücretsiz</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between border-t border-stone/70 pt-5 text-[15px] font-medium">
              <span>Toplam</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <Link
              href="/odeme"
              className="mt-6 block w-full bg-ink py-3.5 text-center text-sm font-medium text-bone transition-colors hover:bg-graphite"
            >
              Ödeme Adımına Geç
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
