import { Category, Product } from "./types";

function unsplash(id: string, w = 1200): string {
  return `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
}

// Sourced fashion photography (Unsplash, free commercial license).
const IMG = {
  hero: "photo-1619603364937-8d7af41ef206",
  tshirt1: "photo-1586790170083-2f9ceadc732d",
  tshirt2: "photo-1571455786673-9d9d6c194f90",
  tshirt3: "photo-1592994238317-fcf75c5466fd",
  tshirt4: "photo-1601608319973-2bbf90f917b5",
  shirt1: "photo-1621604475041-812d09875f97",
  shirt2: "photo-1626557981101-aae6f84aa6ff",
  shirt3: "photo-1659592987637-c766206e72b8",
  jean1: "photo-1627379114594-7aff6664cd94",
  sweat1: "photo-1642886512785-b5fee9faad7f",
  sweat2: "photo-1642886512884-529c2fa16aa9",
  jacket1: "photo-1619603364937-8d7af41ef206",
  jacket2: "photo-1632958978877-69406b688b11",
  suit1: "photo-1630173250799-2813d34ed14b",
  suit2: "photo-1625502709763-f5f3880c17ba",
  suit3: "photo-1713636255103-f1bc57023385",
};

export const HERO_IMAGE = unsplash(IMG.hero, 1600);

export const CATEGORIES: Category[] = [
  { slug: "tshirt", label: "T-Shirt" },
  { slug: "gomlek", label: "Gömlek" },
  { slug: "pantolon", label: "Pantolon" },
  { slug: "jean", label: "Jean" },
  { slug: "sweatshirt", label: "Sweatshirt" },
  { slug: "ceket", label: "Ceket" },
  { slug: "takim-kombin", label: "Takım / Kombin" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "oversize-premium-tshirt",
    name: "Oversize Premium T-Shirt",
    category: "tshirt",
    price: 899,
    images: [unsplash(IMG.tshirt1), unsplash(IMG.tshirt3)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    colorName: "Kırık Beyaz",
    description:
      "Ağır gramajlı, oversize kalıba sahip bu t-shirt günlük kombinlerin değişmez parçası. Omuz düşürme detayı ve kalın yaka bandı ile uzun ömürlü bir kullanım sunar.",
    fabric: "%100 pamuk, 240 gr/m² şardonlu kumaş",
    care: "30°C'de makinede yıkayın, düşük ısıda ütüleyin.",
  },
  {
    slug: "regular-fit-pamuklu-tshirt",
    name: "Regular Fit Pamuklu T-Shirt",
    category: "tshirt",
    price: 749,
    images: [unsplash(IMG.tshirt2), unsplash(IMG.tshirt4)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOutSizes: ["S"],
    colorName: "Siyah",
    description:
      "Güne her koşulda eşlik eden regular kesim t-shirt, nefes alan kumaşı sayesinde tüm gün konfor sağlar. Kombinlemesi en kolay temel parçalardan biri.",
    fabric: "%100 pamuk, 180 gr/m²",
    care: "30°C'de makinede yıkayın, ters çevirip kurutun.",
  },
  {
    slug: "slim-fit-nakisli-tshirt",
    name: "Slim Fit Nakışlı T-Shirt",
    category: "tshirt",
    price: 949,
    images: [unsplash(IMG.tshirt4), unsplash(IMG.tshirt1)],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    colorName: "Antrasit",
    description:
      "Göğüs kısmında ton üstü ton nakış detayına sahip slim fit t-shirt, sade ama iddialı bir görünüm arıyanlar için tasarlandı.",
    fabric: "%95 pamuk, %5 elastan",
    care: "30°C'de makinede yıkayın, hafif ütüleyin.",
  },
  {
    slug: "regular-fit-keten-gomlek",
    name: "Regular Fit Keten Gömlek",
    category: "gomlek",
    price: 1299,
    images: [unsplash(IMG.shirt3), unsplash(IMG.shirt2)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorName: "Bej",
    description:
      "Keten karışımlı dokusuyla yaz aylarının vazgeçilmezi. Rahat regular kesimi ve nefes alan kumaşıyla hem günlük hem şık kombinlere uyum sağlar.",
    fabric: "%55 keten, %45 pamuk",
    care: "30°C'de hassas yıkayın, buharlı ütüleyin.",
  },
  {
    slug: "slim-fit-oxford-gomlek",
    name: "Slim Fit Oxford Gömlek",
    category: "gomlek",
    price: 1199,
    images: [unsplash(IMG.shirt1), unsplash(IMG.shirt3)],
    sizes: ["S", "M", "L", "XL"],
    colorName: "Siyah",
    description:
      "Oxford dokulu kumaşı ile hem ofis hem akşam kombinlerinde kullanılabilecek çok yönlü bir gömlek. Slim kesimi vücudu saran ama rahat bir duruş sağlar.",
    fabric: "%100 pamuk oxford dokuma",
    care: "30°C'de makinede yıkayın, nemliyken ütüleyin.",
  },
  {
    slug: "ekose-flanel-gomlek",
    name: "Ekose Flanel Gömlek",
    category: "gomlek",
    price: 1349,
    images: [unsplash(IMG.shirt2), unsplash(IMG.shirt1)],
    sizes: ["M", "L", "XL", "XXL"],
    isNew: true,
    colorName: "Kahve Ekose",
    description:
      "Şardonlanmış flanel kumaşı ile kışın en sıcak tutan parçalarından. Ekose deseni tek başına ya da içine t-shirt ile katmanlı giyilebilir.",
    fabric: "%80 pamuk, %20 polyester flanel",
    care: "30°C'de makinede yıkayın, ütü öncesi ters çevirin.",
  },
  {
    slug: "premium-straight-jean",
    name: "Premium Straight Jean",
    category: "jean",
    price: 1499,
    images: [unsplash(IMG.jean1), unsplash(IMG.suit1)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorName: "Koyu Lacivert",
    description:
      "Straight kesimi ile hem klasik hem güncel bir duruş sunan premium jean. Kalın dokuma yapısı sayesinde şeklini uzun süre korur.",
    fabric: "%98 pamuk, %2 elastan denim",
    care: "30°C'de ters çevirerek yıkayın, az sıkın.",
  },
  {
    slug: "slim-fit-likral-jean",
    name: "Slim Fit Likralı Jean",
    category: "jean",
    price: 1399,
    images: [unsplash(IMG.jean1, 1200), unsplash(IMG.jean1, 900)],
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["XL"],
    colorName: "Siyah",
    description:
      "İçerdiği likra sayesinde harekete tam uyum sağlayan slim fit jean. Günlük kullanım için esneklik arayanların favorisi.",
    fabric: "%96 pamuk, %4 likra",
    care: "30°C'de ters çevirerek yıkayın.",
  },
  {
    slug: "relaxed-fit-chino-pantolon",
    name: "Relaxed Fit Chino Pantolon",
    category: "pantolon",
    price: 1099,
    images: [unsplash(IMG.suit1), unsplash(IMG.jacket1)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorName: "Haki",
    description:
      "Rahat relaxed kalıbı ile hem gündelik hem şehir kombinlerinde kullanılabilecek chino pantolon. Esnek bel bandı tüm gün konfor sağlar.",
    fabric: "%97 pamuk, %3 elastan gabardin",
    care: "30°C'de makinede yıkayın, orta ısıda ütüleyin.",
  },
  {
    slug: "klasik-kesim-kumas-pantolon",
    name: "Klasik Kesim Kumaş Pantolon",
    category: "pantolon",
    price: 1249,
    images: [unsplash(IMG.suit2), unsplash(IMG.suit3)],
    sizes: ["M", "L", "XL", "XXL"],
    colorName: "Antrasit",
    description:
      "Ofis ve özel günler için tasarlanmış klasik kesim kumaş pantolon. Düşük gramajlı dokusu ile mevsim geçişlerinde rahatlıkla giyilir.",
    fabric: "%70 polyester, %30 viskon",
    care: "Kuru temizlemeye verin.",
  },
  {
    slug: "oversize-sardonlu-sweatshirt",
    name: "Oversize Şardonlu Sweatshirt",
    category: "sweatshirt",
    price: 1199,
    images: [unsplash(IMG.sweat1), unsplash(IMG.sweat2)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    colorName: "Bordo",
    description:
      "İçi şardonlu, oversize kalıplı sweatshirt soğuk günlerde katman yapmak için ideal. Rib detaylı kol ve etek ucu şekli korur.",
    fabric: "%80 pamuk, %20 polyester şardonlu",
    care: "30°C'de makinede yıkayın, düşük ısıda kurutun.",
  },
  {
    slug: "kapusonlu-sweatshirt",
    name: "Kapüşonlu Sweatshirt",
    category: "sweatshirt",
    price: 1099,
    images: [unsplash(IMG.sweat2), unsplash(IMG.sweat1)],
    sizes: ["S", "M", "L", "XL"],
    colorName: "Bordo",
    description:
      "Günlük kombinlerin tamamlayıcısı kapüşonlu sweatshirt, kanguru cep detayı ve ayarlanabilir kapüşon ipi ile pratik kullanım sunar.",
    fabric: "%75 pamuk, %25 polyester",
    care: "30°C'de makinede yıkayın.",
  },
  {
    slug: "minimal-bomber-ceket",
    name: "Minimal Bomber Ceket",
    category: "ceket",
    price: 2499,
    images: [unsplash(IMG.jacket1), unsplash(IMG.jacket2)],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    colorName: "Kum Bej",
    description:
      "Minimal çizgileri ile her kombine uyum sağlayan bomber ceket. Rib detaylı yaka, kol ve etek ile şık bir duruş kazandırır.",
    fabric: "Dış: %100 polyester, İç astar: %100 polyester",
    care: "Kuru temizlemeye verin.",
  },
  {
    slug: "deri-gorunumlu-biker-ceket",
    name: "Deri Görünümlü Biker Ceket",
    category: "ceket",
    price: 2899,
    images: [unsplash(IMG.jacket2), unsplash(IMG.jacket1)],
    sizes: ["M", "L", "XL", "XXL"],
    colorName: "Siyah",
    description:
      "Suni deri dokusu ile karakterli bir görünüm sunan biker ceket. Fermuar detayları ve yapılandırılmış omuzlarıyla iddialı kombinler için tasarlandı.",
    fabric: "Dış: %100 suni deri, İç astar: %100 polyester",
    care: "Nemli bezle silerek temizleyin.",
  },
  {
    slug: "slim-fit-takim-elbise",
    name: "Slim Fit Takım Elbise",
    category: "takim-kombin",
    price: 3999,
    images: [unsplash(IMG.suit2), unsplash(IMG.suit3)],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colorName: "Lacivert",
    description:
      "Özel davetler ve iş toplantıları için tasarlanmış slim fit takım elbise. Ceket ve pantolon ayrı ayrı da kombinlenebilir.",
    fabric: "%68 polyester, %30 viskon, %2 elastan",
    care: "Kuru temizlemeye verin.",
  },
  {
    slug: "klasik-blazer-ceket-kombin",
    name: "Klasik Blazer Ceket Kombin",
    category: "takim-kombin",
    price: 2799,
    images: [unsplash(IMG.suit1), unsplash(IMG.suit3)],
    sizes: ["S", "M", "L", "XL"],
    soldOutSizes: ["S"],
    colorName: "Gri Melanj",
    description:
      "Gömlek üstüne ya da t-shirt ile rahat bir kombinde giyilebilen klasik blazer ceket. Tek düğme kapama ve keskin yaka detayına sahiptir.",
    fabric: "%80 polyester, %20 viskon",
    care: "Kuru temizlemeye verin.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, count);
}
