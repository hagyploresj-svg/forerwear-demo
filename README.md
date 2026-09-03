# SHNWearMEN — E-Ticaret Demo

Next.js (App Router) + TypeScript + Tailwind CSS ile hazırlanmış, SHNWearMEN
erkek giyim mağazası için satış odaklı e-ticaret demo sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Ardından tarayıcıda `http://localhost:3000` adresini açın.

## Proje Yapısı

- `app/` — Next.js App Router sayfaları (ana sayfa, kategori, ürün detay,
  sepet, ödeme, bilgi sayfaları)
- `components/` — Header, Footer, ürün kartı, sepet, WhatsApp butonu vb.
  bileşenler
- `lib/products.ts` — **Tüm ürün verisi burada.** Gerçek ürünler eklenmek
  istendiğinde bu dosyadaki `PRODUCTS` dizisini güncellemeniz yeterlidir.
- `lib/whatsapp.ts` — WhatsApp iletişim numarası burada tanımlıdır
  (`WHATSAPP_PHONE`). Gerçek numara ile değiştirin.

## Gerçek verilerle değiştirilmesi gerekenler

1. **Ürünler ve fotoğraflar** — `lib/products.ts` içindeki `PRODUCTS` dizisi
   demo amaçlı gerçekçi Türkçe ürün adları, fiyatlar ve stok fotoğrafları
   (Unsplash, ücretsiz ticari kullanım lisansı) içerir. Gerçek ürün
   fotoğrafları ve stok bilgileriyle değiştirilmelidir.
2. **WhatsApp numarası** — `lib/whatsapp.ts` içindeki `WHATSAPP_PHONE`
   değeri demo bir numaradır.
3. **Instagram / Google yorumları** — `components/Testimonials.tsx` ve
   `components/InstagramGrid.tsx` şu an demo içerikle çalışır; ileride
   gerçek Instagram/Google API verisiyle bağlanacak şekilde bileşen
   yapısında tasarlanmıştır.
4. **Ödeme adımı** — `app/odeme/page.tsx` sayfası bir ödeme sağlayıcısına
   bağlı değildir; kullanıcı akışını göstermek amacıyla hazırlanmış bir
   demo formudur. Gerçek kullanımda bir ödeme altyapısı (iyzico, PayTR vb.)
   entegre edilmelidir.

## Teknik notlar

- Sepet verisi tarayıcıda `localStorage` üzerinde tutulur.
- Görseller `next/image` ile optimize edilir; `next.config.mjs` içinde
  `images.unsplash.com` domaini tanımlıdır. Gerçek ürün fotoğrafları farklı
  bir CDN'den geliyorsa bu listeyi güncelleyin.
- Site mobil öncelikli (mobile-first) olarak tasarlanmıştır.
