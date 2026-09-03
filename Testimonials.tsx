interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

// Demo içerik — ileride Google / Instagram yorumlarıyla değiştirilecek.
const testimonials: Testimonial[] = [
  {
    name: "Emre K.",
    text: "Kumaş kalitesi beklediğimden çok daha iyiydi, kargo da hızlı geldi.",
    rating: 5,
  },
  {
    name: "Barış T.",
    text: "Beden tablosu tam uyumluydu, hiç değişim yapmama gerek kalmadı.",
    rating: 5,
  },
  {
    name: "Kaan Y.",
    text: "WhatsApp'tan sorduğum soruya hemen dönüş yaptılar, alışverişim kolay oldu.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <h2 className="mb-8 font-display text-2xl font-bold tracking-tightest md:text-3xl">
        Bizi Tercih Edenler
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="border border-stone/70 p-6">
            <div className="flex gap-1 text-sm text-ink">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < t.rating ? "" : "opacity-20"}>
                  ★
                </span>
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-graphite">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
