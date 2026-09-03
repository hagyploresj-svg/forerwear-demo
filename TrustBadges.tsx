const badges = [
  {
    title: "Güvenli Ödeme",
    text: "256-bit SSL sertifikası ile korumalı ödeme altyapısı.",
  },
  {
    title: "Hızlı Kargo",
    text: "Siparişleriniz 24 saat içinde kargoya teslim edilir.",
  },
  {
    title: "Kolay Değişim",
    text: "14 gün içinde ücretsiz değişim ve iade imkanı.",
  },
  {
    title: "WhatsApp Destek",
    text: "Sorularınız için ürün sayfasından anında bize ulaşın.",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-stone/70">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
        {badges.map((badge) => (
          <div key={badge.title}>
            <p className="text-[15px] font-medium">{badge.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-graphite">{badge.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
