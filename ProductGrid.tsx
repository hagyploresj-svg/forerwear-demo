import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-content px-5 py-10 md:px-8">
      {title && (
        <h2 className="mb-8 font-display text-2xl font-bold tracking-tightest md:text-3xl">
          {title}
        </h2>
      )}
      {products.length === 0 ? (
        <p className="py-10 text-center text-sm text-graphite">
          Bu kategoride henüz ürün bulunmuyor.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
