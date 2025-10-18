// src/components/Benefits.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const benefitData = [
  { icon: '🧰', title: 'Armada Terawat', description: 'Cek & servis rutin', color: 'teal' },
  { icon: '🛡️', title: 'Keselamatan', description: 'SOP & asuransi perjalanan', color: 'amber' },
  { icon: '⏱️', title: 'On-time', description: 'Manajemen jadwal profesional', color: 'sky' },
];

export const Benefits = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="benefit" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Keunggulan Kami</h3>
      <div className="text-muted mt-1">Layanan yang membuat perjalanan Anda berbeda</div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {benefitData.map((benefit) => (
          <div key={benefit.title} className="p-6 bg-white rounded-xl shadow-sm">
            <div className="flex gap-4 items-start">
              <div className={`grid place-items-center w-12 h-12 rounded-lg flex-shrink-0 bg-${benefit.color}-50`}>
                {benefit.icon}
              </div>
              <div>
                <div className="font-extrabold">{benefit.title}</div>
                <div className="text-muted text-sm mt-1">{benefit.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};