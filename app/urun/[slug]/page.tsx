import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductGallery from "@/components/ProductGallery";
import AddToCartSection from "@/components/AddToCartSection";
import WhatsappButton from "@/components/WhatsappButton";
import ProductGrid from "@/components/ProductGrid";
import { formatPrice } from "@/lib/format";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) return {};

  return {
    title: `${product.name} — SHNWearMEN`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <section className="mx-auto max-w-content px-5 py-8 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ProductGallery images={product.images} alt={product.name} />

          <div className="lg:sticky lg:top-24 lg:self-start">
            {product.isNew && (
              <span className="mb-4 inline-block bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                Yeni Sezon
              </span>
            )}

            <h1 className="max-w-[16ch] font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-sm text-black/50">
              {product.colorName}
            </p>

            <p className="mt-6 text-2xl font-semibold tracking-tight">
              {formatPrice(product.price)}
            </p>

            <div className="mt-8 border-t border-black/10 pt-7">
              <AddToCartSection product={product} />
            </div>

            <div className="mt-4">
              <WhatsappButton
                context="urun"
                productName={product.name}
                variant="inline"
              />
            </div>

            <div className="mt-8 grid grid-cols-3 border-y border-black/10 py-5 text-center">
              <div className="px-2">
                <p className="text-xs font-semibold">Beden Seçimi</p>
                <p className="mt-1 text-[11px] text-black/45">
                  S–XXL seçenekleri
                </p>
              </div>

              <div className="border-x border-black/10 px-2">
                <p className="text-xs font-semibold">Online Sipariş</p>
                <p className="mt-1 text-[11px] text-black/45">
                  Hızlı alışveriş
                </p>
              </div>

              <div className="px-2">
                <p className="text-xs font-semibold">WhatsApp</p>
                <p className="mt-1 text-[11px] text-black/45">
                  Ürün desteği
                </p>
              </div>
            </div>

            <div className="mt-8 divide-y divide-black/10 border-t border-black/10">
              <div className="py-6">
                <p className="text-sm font-semibold">Ürün Detayları</p>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  {product.description}
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-semibold">
                  Kumaş &amp; Materyal
                </p>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {product.fabric}
                </p>

                <p className="mt-2 text-sm leading-7 text-black/60">
                  {product.care}
                </p>
              </div>

              <div className="py-6">
                <p className="text-sm font-semibold">
                  Sipariş &amp; Değişim
                </p>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  Teslimat ve değişim koşulları sipariş öncesinde müşteriye
                  açık şekilde sunulur. Detaylı bilgi için WhatsApp üzerinden
                  mağazamıza ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <ProductGrid products={related} title="Bunları da Beğenebilirsin" />
      )}
    </>
  );
}
