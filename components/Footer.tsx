import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-stone/70 bg-ink text-bone">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-xl font-black tracking-tightest">
            FORER<span className="text-stone">WEAR</span>
          </p>
          <p className="mt-4 max-w-[26ch] text-sm text-bone/60">
            Erkek modasında sade, güçlü ve zamansız çizgi.
          </p>
        </div>

        <div>
          <p className="text-sm text-bone/50">Kategoriler</p>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/kategori/${c.slug}`}
                  className="text-sm text-bone/80 hover:text-bone"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-bone/50">Hızlı Linkler</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                href="/siparis-teslimat"
                className="text-sm text-bone/80 hover:text-bone"
              >
                Sipariş &amp; Teslimat
              </Link>
            </li>

            <li>
              <Link
                href="/degisim-iade"
                className="text-sm text-bone/80 hover:text-bone"
              >
                Değişim / İade
              </Link>
            </li>

            <li>
              <Link
                href="/iletisim"
                className="text-sm text-bone/80 hover:text-bone"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-bone/50">Bizi Takip Edin</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="https://instagram.com/forerwear"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-bone/80 hover:text-bone"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/905000000000"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-bone/80 hover:text-bone"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10 px-5 py-5 text-center text-xs text-bone/40 md:px-8">
        © {new Date().getFullYear()} FORERWEAR. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
