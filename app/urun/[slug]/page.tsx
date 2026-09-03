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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <section className="mx-auto max-w-content px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <ProductGallery images={product.images} alt={product.name} />

          <div className="md:max-w-md">
            {product.isNew && (
              <span className="mb-3 inline-block bg-ink px-2.5 py-1 text-[11px] font-medium text-bone">
                Yeni
              </span>
            )}
            <h1 className="font-display text-2xl font-bold leading-snug md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-graphite">{product.colorName}</p>
            <p className="mt-4 text-xl font-medium">{formatPrice(product.price)}</p>

            <div className="mt-8">
              <AddToCartSection product={product} />
            </div>

            <div className="mt-6">
              <WhatsappButton
                context="urun"
                productName={product.name}
                variant="inline"
              />
            </div>

            <div className="mt-10 space-y-6 border-t border-stone/70 pt-8">
              <div>
                <p className="text-sm font-medium">Ürün Açıklaması</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {product.description}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Kumaş &amp; Materyal</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {product.fabric}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-graphite">
                  {product.care}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Kargo &amp; Değişim</p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Siparişleriniz 24 saat içinde kargoya teslim edilir. Ürünü
                  teslim aldıktan sonra 14 gün içinde ücretsiz değişim veya
                  iade hakkınız bulunur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <ProductGrid products={related} title="Benzer Ürünler" />
      )}
    </>
  );
}
