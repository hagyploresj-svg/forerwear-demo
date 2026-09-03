import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductGrid from "@/components/ProductGrid";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import InstagramGrid from "@/components/InstagramGrid";
import { getNewArrivals } from "@/lib/products";

export default function HomePage() {
  const newArrivals = getNewArrivals();

  return (
    <>
      <Hero />
      <CategoryNav />
      <ProductGrid products={newArrivals} title="Yeni Gelenler" />
      <TrustBadges />
      <Testimonials />
      <InstagramGrid />
    </>
  );
}
