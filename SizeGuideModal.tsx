"use client";

const rows = [
  { size: "S", chest: "88–92", waist: "74–78" },
  { size: "M", chest: "93–97", waist: "79–83" },
  { size: "L", chest: "98–103", waist: "84–89" },
  { size: "XL", chest: "104–109", waist: "90–95" },
  { size: "XXL", chest: "110–116", waist: "96–102" },
];

export default function SizeGuideModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-bone p-6">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-lg"
        >
          ×
        </button>
        <h3 className="font-display text-lg font-bold">Bedenimi Nasıl Seçerim?</h3>
        <p className="mt-2 text-sm text-graphite">
          Aşağıdaki ölçüler santimetre cinsindendir ve yaklaşık değerlerdir; ürün
          modeline göre küçük farklılıklar gösterebilir.
        </p>
        <table className="mt-5 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-stone/70 text-graphite">
              <th className="py-2 font-normal">Beden</th>
              <th className="py-2 font-normal">Göğüs (cm)</th>
              <th className="py-2 font-normal">Bel (cm)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.size} className="border-b border-stone/40">
                <td className="py-2 font-medium">{r.size}</td>
                <td className="py-2">{r.chest}</td>
                <td className="py-2">{r.waist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
