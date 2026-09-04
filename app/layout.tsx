import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";
import WhatsappButton from "@/components/WhatsappButton";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FORERWEAR — Yeni Sezon Erkek Koleksiyonu",
  description:
    "FORERWEAR erkek giyim mağazası. T-shirt, gömlek, jean, sweatshirt, ceket ve yeni sezon erkek koleksiyonunu keşfedin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${archivo.variable} ${inter.variable} font-body bg-bone text-ink antialiased`}
      >
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsappButton context="genel" />
        </CartProvider>
      </body>
    </html>
  );
}
