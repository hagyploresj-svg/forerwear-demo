import WhatsappButton from "@/components/WhatsappButton";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <h1 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
        İletişim
      </h1>
      <div className="mt-8 max-w-md space-y-6">
        <p className="text-[15px] leading-relaxed text-graphite">
          Ürünler, siparişiniz veya iade süreciyle ilgili en hızlı dönüşü
          WhatsApp üzerinden alabilirsiniz.
        </p>
        <WhatsappButton context="genel" variant="inline" />
        <p className="text-sm text-graphite">
          Instagram:{" "}
          <a
            href="https://instagram.com/shnwearmen"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-ink"
          >
            @shnwearmen
          </a>
        </p>
      </div>
    </section>
  );
}
