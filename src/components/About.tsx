// src/components/About.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const points = [
  { icon: '🛡️', title: 'Keamanan', description: 'Pemeriksaan kendaraan & SOP keselamatan', color: 'amber' },
  { icon: '🧰', title: 'Perawatan Rutin', description: 'Servis & sanitasi berkala', color: 'teal' },
];

export const About = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} id="about" className="mb-12 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-extrabold text-xl">Mengapa Memilih TransBus?</h3>
            <p className="text-muted mt-3">Kami menyediakan layanan menyeluruh: perencanaan rute, sopir profesional, armada terawat, dan dukungan operasional selama perjalanan.</p>
            <ul className="mt-4 space-y-3">
              {points.map((point) => (
                <li key={point.title} className="flex gap-3 items-start">
                  <div className={`grid place-items-center w-10 h-10 rounded-lg ${point.color === 'amber' ? 'bg-amber-50' : 'bg-teal-50'} flex-shrink-0`}>{point.icon}</div>
                  <div>
                    <div className="font-bold">{point.title}</div>
                    <div className="text-muted text-sm">{point.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" alt="Bus di jalan" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};