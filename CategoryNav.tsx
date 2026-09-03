import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export default function CategoryNav({ active }: { active?: string }) {
  return (
    <nav className="no-scrollbar mx-auto flex max-w-content gap-2 overflow-x-auto px-5 py-8 md:flex-wrap md:justify-center md:px-8">
      <Link
        href="/"
        className={`shrink-0 border px-5 py-2.5 text-sm transition-colors ${
          !active
            ? "border-ink bg-ink text-bone"
            : "border-stone text-graphite hover:border-ink hover:text-ink"
        }`}
      >
        Yeni Gelenler
      </Link>
      {CATEGORIES.map((c) => (
        <Link
          key={c.slug}
          href={`/kategori/${c.slug}`}
          className={`shrink-0 border px-5 py-2.5 text-sm transition-colors ${
            active === c.slug
              ? "border-ink bg-ink text-bone"
              : "border-stone text-graphite hover:border-ink hover:text-ink"
          }`}
        >
          {c.label}
        </Link>
      ))}
    </nav>
  );
}
