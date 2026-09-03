import { notFound } from "next/navigation";
import CategoryNav from "@/components/CategoryNav";
import ProductGrid from "@/components/ProductGrid";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <>
      <CategoryNav active={category.slug} />
      <ProductGrid products={products} title={category.label} />
    </>
  );
}
