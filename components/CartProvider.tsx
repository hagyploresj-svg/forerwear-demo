"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartLine, Size } from "@/lib/types";
import { getProductBySlug } from "@/lib/products";

interface CartContextValue {
  lines: CartLine[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addLine: (slug: string, size: Size, quantity?: number) => void;
  removeLine: (slug: string, size: Size) => void;
  updateQuantity: (slug: string, size: Size, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "shnwearmen-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // sessizce yoksay
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // sessizce yoksay
    }
  }, [lines, hydrated]);

  const addLine = useCallback(
    (slug: string, size: Size, quantity = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.slug === slug && l.size === size);
        if (existing) {
          return prev.map((l) =>
            l.slug === slug && l.size === size
              ? { ...l, quantity: l.quantity + quantity }
              : l
          );
        }
        return [...prev, { slug, size, quantity }];
      });
      setDrawerOpen(true);
    },
    []
  );

  const removeLine = useCallback((slug: string, size: Size) => {
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));
  }, []);

  const updateQuantity = useCallback((slug: string, size: Size, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => !(l.slug === slug && l.size === size))
        : prev.map((l) =>
            l.slug === slug && l.size === size ? { ...l, quantity } : l
          )
    );
  }, []);

  const totalCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const totalPrice = useMemo(
    () =>
      lines.reduce((sum, l) => {
        const product = getProductBySlug(l.slug);
        return product ? sum + product.price * l.quantity : sum;
      }, 0),
    [lines]
  );

  const value: CartContextValue = {
    lines,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    addLine,
    removeLine,
    updateQuantity,
    totalCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart, CartProvider içinde kullanılmalı");
  return ctx;
}
