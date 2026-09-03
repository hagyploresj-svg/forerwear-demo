export default function ShippingInfoPage() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 md:px-8">
      <h1 className="font-display text-2xl font-bold tracking-tightest md:text-3xl">
        Sipariş &amp; Teslimat
      </h1>
      <div className="mt-8 max-w-[65ch] space-y-6 text-[15px] leading-relaxed text-graphite">
        <p>
          Verdiğiniz siparişler onaylandıktan sonra 24 saat içinde kargoya
          teslim edilir. Kargo takip numaranız, siparişiniz yola çıktığında
          size iletilir.
        </p>
        <p>
          Teslimat süresi bulunduğunuz bölgeye göre değişiklik gösterebilir.
          Siparişinizin durumu hakkında bilgi almak için WhatsApp üzerinden
          bize ulaşabilirsiniz.
        </p>
        <p>
          Kargo ücreti tüm siparişlerde tarafımızca karşılanmaktadır.
        </p>
      </div>
    </section>
  );
}
