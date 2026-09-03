"use client";

import { buildWhatsappLink, productWhatsappMessage } from "@/lib/whatsapp";

interface WhatsappButtonProps {
  context: "genel" | "urun";
  productName?: string;
  variant?: "floating" | "inline";
}

export default function WhatsappButton({
  context,
  productName,
  variant = "floating",
}: WhatsappButtonProps) {
  const message =
    context === "urun" && productName
      ? productWhatsappMessage(productName)
      : "Merhaba, SHNWearMEN hakkında bilgi almak istiyorum.";

  const href = buildWhatsappLink(message);

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex w-full items-center justify-center gap-2 border border-ink px-5 py-3.5 text-sm font-medium transition-colors hover:bg-ink hover:text-bone"
      >
        <WhatsappIcon className="h-4 w-4" />
        WhatsApp'tan Sor
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan bize ulaşın"
      className="fixed bottom-5 right-5 z-30 flex items-center justify-center rounded-full bg-ink text-bone shadow-lg shadow-ink/20 transition-transform hover:scale-105 md:bottom-7 md:right-7"
      style={{ width: 52, height: 52 }}
    >
      <WhatsappIcon className="h-6 w-6" />
    </a>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.35a9.86 9.86 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.92C21.96 6.45 17.5 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.78.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.26-8.2 2.2 0 4.28.86 5.84 2.42a8.19 8.19 0 0 1 2.42 5.83c0 4.53-3.68 8.2-8.26 8.2Zm4.53-6.15c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}
