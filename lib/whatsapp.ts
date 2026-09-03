// Demo mağaza WhatsApp numarası — gerçek numara ile değiştirilecek.
export const WHATSAPP_PHONE = "905000000000";

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export function productWhatsappMessage(productName: string): string {
  return `Merhaba, ${productName} hakkında bilgi almak istiyorum.`;
}
