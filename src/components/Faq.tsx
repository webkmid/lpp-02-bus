// src/components/Faq.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const faqData = [
  { 
    q: 'Apa saja persyaratan sewa bus?', 
    a: 'Identitas penanggung jawab, deposit sesuai paket, dan tanda tangan kontrak sewa.' 
  },
  { 
    q: 'Apakah sopir termasuk paket?', 
    a: 'Untuk sebagian besar paket, sopir sudah termasuk, kecuali ada permintaan khusus untuk paket lepas kunci.' 
  },
  { 
    q: 'Bagaimana kebijakan pembatalan & refund?', 
    a: 'Kebijakan pembatalan kami fleksibel dan tertera di dalam kontrak. Umumnya, pembatalan H-7 akan mendapat refund penuh. Silakan hubungi Customer Service untuk detail lebih lanjut.' 
  },
];

export const Faq = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="faq" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">FAQ</h3>
      <div className="text-muted mt-1">Pertanyaan umum seputar penyewaan bus</div>

      <div className="mt-6 space-y-3">
        {faqData.map((item, index) => (
          <details key={item.q} open={index === 0} className="group bg-white rounded-lg border border-navy/5 shadow-sm overflow-hidden">
            <summary className="cursor-pointer flex justify-between items-center p-4 font-semibold text-navy">
              {item.q}
              <svg className="w-5 h-5 transform transition-transform duration-300 group-open:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-muted">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};