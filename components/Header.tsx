"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 md:px-8">
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block h-[2px] w-6 bg-ink" />
          <span className="block h-[2px] w-6 bg-ink" />
        </button>

        <Link
          href="/"
          className="font-display text-xl font-black tracking-tightest md:text-2xl"
        >
          SHNWear<span className="text-graphite">MEN</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/kategori/${c.slug}`}
              className="text-[15px] text-graphite transition-colors hover:text-ink"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden text-[15px] text-graphite hover:text-ink md:block"
          >
            Yeni Gelenler
          </Link>
          <button
            onClick={openDrawer}
            className="relative flex items-center gap-2"
            aria-label="Sepeti aç"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {totalCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] font-medium text-bone">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-stone/70 px-5 py-4 md:hidden">
          <Link
            href="/"
            className="py-2 text-[15px]"
            onClick={() => setMenuOpen(false)}
          >
            Yeni Gelenler
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/kategori/${c.slug}`}
              className="py-2 text-[15px] text-graphite"
              onClick={() => setMenuOpen(false)}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
