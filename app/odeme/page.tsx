"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const { lines, totalPrice } = useCart();
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return (
      <section className="mx-auto max-w-content px-5 py-20 text-center md:px-8">
        <h1 className="font-display text-2xl font-bold md:text-3xl">
          Siparişiniz Alındı
        </h1>
        <p className="mx-auto mt-4 max-w-[42ch] text-sm leading-relaxed text-graphite">
          Bu bir demo akışıdır; gerçek bir ödeme işlemi gerçekleştirilmemiştir.
          Canlı sistemde bu adımda sipariş onay e-postası gönderilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
        >
          Alışverişe Devam Et
        </Link>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="mx-auto max-w-content px-5 py-20 text-center md:px-8">
        <p className="text-sm text-graphite">Sepetiniz boş olduğu için ödeme adımına geçemezsiniz.</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
        >
          Alışverişe Başla
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-14">
      <h1 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
        Ödeme
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCompleted(true);
        }}
        className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]"
      >
        <div className="space-y-8">
          <div>
            <p className="text-sm font-medium">Teslimat Bilgileri</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Ad Soyad" className="border border-stone bg-transparent px-4 py-3 text-sm sm:col-span-2" />
              <input required placeholder="Telefon" className="border border-stone bg-transparent px-4 py-3 text-sm" />
              <input required placeholder="Şehir" className="border border-stone bg-transparent px-4 py-3 text-sm" />
              <input required placeholder="Adres" className="border border-stone bg-transparent px-4 py-3 text-sm sm:col-span-2" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Ödeme Yöntemi</p>
            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-3 border border-stone px-4 py-3 text-sm">
                <input type="radio" name="payment" defaultChecked />
                Kredi / Banka Kartı
              </label>
              <label className="flex items-center gap-3 border border-stone px-4 py-3 text-sm">
                <input type="radio" name="payment" />
                Kapıda Ödeme
              </label>
            </div>
          </div>
        </div>

        <aside className="h-fit border border-stone/70 p-6">
          <p className="font-display text-lg font-bold">Sipariş Özeti</p>
          <div className="mt-5 flex justify-between text-sm">
            <span className="text-graphite">Ara Toplam</span>
            <span className="font-medium">{formatPrice(totalPrice)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-graphite">Kargo</span>
            <span className="font-medium">Ücretsiz</span>
          </div>
          <div className="mt-5 flex justify-between border-t border-stone/70 pt-5 text-[15px] font-medium">
            <span>Toplam</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-ink py-3.5 text-sm font-medium text-bone transition-colors hover:bg-graphite"
          >
            Siparişi Tamamla
          </button>
        </aside>
      </form>
    </section>
  );
}
